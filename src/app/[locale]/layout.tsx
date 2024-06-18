import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutClient from "./layoutClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CV - Persional",
  description: "Persional website",
};

export default function RootLayout({
  children,
  params,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <>
      <html
        lang={params.locale}
        suppressHydrationWarning
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <body suppressHydrationWarning>
          <LayoutClient params={params}>
            {children}
            {modal}
          </LayoutClient>
        </body>
      </html>
    </>
  );
}
