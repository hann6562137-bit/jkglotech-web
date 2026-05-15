import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type AboutUsSubmission = {
  products: string[];
  organization: string;
  country: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  comments: string;
  consent: boolean;
};

function normalizeString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isValidSubmission(body: unknown): body is AboutUsSubmission {
  if (!body || typeof body !== "object") {
    console.error("[about-us] validation fail: body is not object");
    return false;
  }

  const s = body as Record<string, unknown>;
  const checks: [boolean, string][] = [
    [Array.isArray(s.products) && s.products.length > 0, "products empty"],
    [
      Array.isArray(s.products) &&
        s.products.every((p) => typeof p === "string" && p.trim().length > 0),
      "products invalid",
    ],
    [normalizeString(s.organization).length > 0, "organization empty"],
    [normalizeString(s.country).length > 0, "country empty"],
    [normalizeString(s.firstName).length > 0, "firstName empty"],
    [normalizeString(s.lastName).length > 0, "lastName empty"],
    [normalizeString(s.email).length > 0, "email empty"],
    [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizeString(s.email)),
      "email invalid",
    ],
    [normalizeString(s.phone).length > 0, "phone empty"],
    [typeof s.consent === "boolean" && s.consent === true, "consent false"],
  ];

  for (const [pass, label] of checks) {
    if (!pass) {
      console.error("[about-us] validation fail:", label);
      return false;
    }
  }
  return true;
}

function buildEmailText(submission: AboutUsSubmission) {
  return [
    "홈페이지에서 문의사항이 접수되었습니다.",
    "",
    `Interested Products(관심 상품): ${submission.products.join(", ")}`,
    `Organization / Company(조직 / 회사): ${submission.organization}`,
    `Country(국가): ${submission.country}`,
    `First Name(이름): ${submission.firstName}`,
    `Last Name(성): ${submission.lastName}`,
    `Email(이메일): ${submission.email}`,
    `Phone(전화번호): ${submission.phone}`,
    `Consent(개인정보 동의): ${submission.consent ? "Yes" : "No"}`,
    "",
    "Comments(메시지):",
    submission.comments || "(메시지 없음)",
  ].join("\n");
}

function buildEmailHtml(submission: AboutUsSubmission) {
  const rows = [
    ["Interested Products(관심 상품)", submission.products.join(", ")],
    ["Organization / Company(조직 / 회사)", submission.organization],
    ["Country(국가)", submission.country],
    ["First Name(이름)", submission.firstName],
    ["Last Name(성)", submission.lastName],
    ["Email(이메일)", submission.email],
    ["Phone(전화번호)", submission.phone],
    ["Consent(개인정보 동의)", submission.consent ? "Yes" : "No"],
    ["Comments(메시지)", submission.comments || "(메시지 없음)"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #d1d5db;font-weight:600;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:8px 12px;border:1px solid #d1d5db;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#111827;">
      <h2 style="margin-bottom:16px;">홈페이지에서 문의사항이 접수되었습니다.</h2>
      <table style="border-collapse:collapse;width:100%;max-width:720px;">
        <tbody>${tableRows}</tbody>
      </table>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (!isValidSubmission(body)) {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.ABOUT_US_TO_EMAIL;

    if (!apiKey || !toEmail) {
      return NextResponse.json(
        { error: "Resend is not configured." },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);
    const submission: AboutUsSubmission = {
      ...body,
      products: body.products.map((product) => product.trim()),
      organization: body.organization.trim(),
      country: body.country.trim(),
      firstName: body.firstName.trim(),
      lastName: body.lastName.trim(),
      email: body.email.trim(),
      phone: body.phone.trim(),
      comments: body.comments.trim(),
    };

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [toEmail],
      subject: `[JK GLOTECH] 문의사항 수신 - ${submission.firstName} ${submission.lastName}`,
      replyTo: submission.email,
      text: buildEmailText(submission),
      html: buildEmailHtml(submission),
    });

    if (error) {
      console.error("Failed to send about-us inquiry email:", error);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Unexpected error in about-us API route:", error);
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 },
    );
  }
}
