import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async ({ locale: defaultLocale }) => {
  // Use the standard NEXT_LOCALE cookie that Next.js uses
  const cookieLocale = (await cookies()).get("NEXT_LOCALE")?.value;
  
  // Use the URL locale as passed by Next.js if available, 
  // otherwise fall back to cookie, and finally to default (bg)
  const locale = defaultLocale || cookieLocale || "bg";
  
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
