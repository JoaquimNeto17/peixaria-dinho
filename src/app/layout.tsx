// app/layout.tsx
import type { Metadata } from "next";
import { Oswald, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Dinho Peixaria | Peixes e Frutos do Mar Frescos",
  description: "A melhor peixaria do Brasil com produtos frescos de alta qualidade. Entregamos em toda a região.",
  keywords: "peixaria, peixes frescos, frutos do mar, camarão, salmão, polvo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={cn("h-full", "antialiased", oswald.variable, geist.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}