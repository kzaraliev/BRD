import Head from "next/head";
import Footer from "../components/footer";
import Navigation from "../components/nav";

import "../styles/globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <Head>
        <link rel="preload" as="image" href="/lawyer.webp" type="image/webp" />
      </Head>
      <body className={roboto.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
