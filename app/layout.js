import Navigation from "../components/nav";
import CookieConsentBanner from "../compone nts/cookieConsentBanner";
import Footer from "../components/footer";

import "../styles/globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Адвокатско дружество „Бурков, Радев, Дюлгерска“",
  description:
    "Вашият доверен правен партньор. Предлагаме висококачествени правни услуги в областта на търговското, гражданското, наказателното и административното право.",
};

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
