import type { Metadata } from "next";
import { Header } from "@/components/elements/header";
import { Footer } from "@/components/elements/footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tracsy",
  description: "Conectando e reencontrando",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex justify-center flex-grow h-full">
        {/*Conteúdo*/}
        {children}
      </div>
      <Footer />
    </div>
      </body>
    </html>
  );
}
