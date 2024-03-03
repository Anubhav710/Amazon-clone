import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amazon_2.0",
  description: "Created a Amazon E-commerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="max-w-[95rem] mx-auto">{children}</div>
      </body>
    </html>
  );
}
