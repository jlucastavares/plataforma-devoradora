import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "A.A.A. Nutrição UFPE - Devoradora",
  description: "Plataforma oficial da Atlética Devoradora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        {/* O flex-grow garante que o conteúdo empurre o footer para o fundo */}
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}