import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// components
import Navbar from "./components/core/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JUBAYEDUL HOQUE",
  description: "My Dev Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
