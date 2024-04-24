import { Inter } from "next/font/google";
import Head from "next/head";
import Providers from "@/components/ProgressBarProvider";
import BtmNav from "@/components/BtmNav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "CravPixel",
  description: "Your Partner in Web Development & Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body className={`${inter.className}`}>
        <Providers>
          {children} <BtmNav />
        </Providers>
      </body>
    </html>
  );
}
