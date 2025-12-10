"use server";

import { boardRepository } from "@/repositories/server";

export async function insertContactAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone_number") as string;
  const company = formData.get("company_name") as string;
  const subject = formData.get("subject") as string;
  const inquiry = formData.get("inquiry") as string;

  try {
    await boardRepository.insertContact(
      name,
      email,
      phone,
      company,
      subject,
      inquiry
    ); 
  } catch {
    return { success: false };
  }

  return { success: true };
}
