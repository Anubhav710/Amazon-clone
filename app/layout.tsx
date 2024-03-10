import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import { Providers as Pd } from "@/store/provides";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amazon",
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
        <Pd>
          <Header />
          <div className="w-full bg-gray-100">
            <div className="max-w-screen-2xl mx-auto  ">{children}</div>
          </div>
        </Pd>
      </body>
    </html>
  );
}
