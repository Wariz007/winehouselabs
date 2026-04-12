import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/main.scss";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "WinehouseLabs",
  description: "Accumulating the world's knowledge on software engineering to solve Nigerian problems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}