import { headers } from "next/headers";
import Navigation from "../components/nav";
import CookieConsentBanner from "../components/cookieConsentBanner";
import Footer from "../components/footer";

import "../styles/globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});


export async function generateMetadata() {
  const host = (await headers()).get("host"); // Get the current domain
  const protocol = host?.includes("localhost") ? "http" : "https"; // Adjust for local dev

  return {
    metadataBase: new URL(`${protocol}://${host}`),
    title: "Адвокатско дружество „Бурков, Радев, Дюлгерска“",
    description:
      "Вашият доверен правен партньор. Предлагаме висококачествени правни услуги в областта на търговското, гражданското, наказателното и административното право.",
    openGraph: {
      title: "Адвокатско дружество „Бурков, Радев, Дюлгерска“",
      description:
        "Вашият доверен правен партньор. Предлагаме висококачествени правни услуги в областта на търговското, гражданското, наказателното и административното право.",
      images: "/lawyer.webp",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <body className={roboto.className}>
        <Navigation />
        {children}
        <CookieConsentBanner />
        <Footer />
      </body>
    </html>
  );
}
