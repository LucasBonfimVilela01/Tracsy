// Define que o código deve ser rodado do lado do cliente

import type { Metadata } from "next";
import { Header } from "@/components/elements/header";
import { Footer } from "@/components/elements/footer";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

//Define a logo do site
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

//Define a logo do site
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//Define o título da página e a descrição da página
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
    <html lang="pt-br">
      {/*Usa as analytics do Vercel*/}
      <Analytics />

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          {/*Usa o elemento Header*/}
          <Header />
          <div className="flex justify-center flex-grow h-full">
            {/*Conteúdo da página*/}
            {children}
          </div>
          {/*Usa o elemento Footer*/}
          <Footer />
        </div>
      </body>
    </html>
  );
}
