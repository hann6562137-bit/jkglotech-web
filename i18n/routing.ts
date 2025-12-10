/**
 * i18n/routing.ts
 * 
 * export로 링크, 라우터 등 내비게이션 관련 기능들을 내보냅니다. 
 * 사용자는 Next.js의 Link, redirect, usePathname, useRouter 등을 이 래퍼를 통해 사용할 수 있습니다.
 */
import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "ko"],

  // Used when no locale matches
  defaultLocale: "ko",
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
