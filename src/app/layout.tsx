import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./fonts";
import Header from "./components/container/Header";
import Footer from "./components/container/Footer";

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
      <body className={`dark:bg-slate-950 ${montserrat.className}`}>
        <Header />
        <main className="mx-5 p-2 md:mx-10 md:p-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
