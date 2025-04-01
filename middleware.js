import CreateMiddleware from "next-intl/middleware";

export default CreateMiddleware({
  locales: ["bg", "en"],
  defaultLocale: "bg",
});

export const config = {
  matcher: ["/", "/(bg|en)/:path*"],
};
