import { cookies } from "next/headers";

export const getLocaleFromCookies = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("BRD_LOCALE")?.value || "bg";
};
