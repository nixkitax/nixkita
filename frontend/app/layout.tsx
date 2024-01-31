import "./globals.css";
import Head from "next/head";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "nixkita",
  description: "Nixkita's blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/sf-pro-display"
          rel="stylesheet"
        />
      </Head>
      <body className={`flex flex-col justify-between font-sans`}>
        {children}
      </body>
    </html>
  );
}
