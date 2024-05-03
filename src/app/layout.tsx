import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "Okunola Abdulwasiu",
  description: "Okunola Abdulwasiu Developer's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark:bg-slate-950/95 ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
