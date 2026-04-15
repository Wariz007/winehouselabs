import type { Metadata } from "next";
import "@/styles/main.scss";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

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
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}