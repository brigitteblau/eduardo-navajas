import "./globals.css";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Eduardo Navajas — Cortadoras y Servicio de Jardinería",
  description:
    "Corte preciso y prolijo. Servicio profesional para tu jardín, parques y espacios verdes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
