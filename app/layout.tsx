import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// components
import Header from "./sections/core/Header";

const poppins = Poppins({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Jubayedul Hoque",
  description: "My Dev Portfolio",
  icons: "/logo-dark-full.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
