import { Inter } from "next/font/google";
import { Suspense, lazy } from "react";
import Head from "next/head";
import Providers from "@/components/ProgressBarProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const BtmNav = lazy(() => import("@/components/BtmNav"));

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
          {children}
          <Suspense>
            <BtmNav />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
