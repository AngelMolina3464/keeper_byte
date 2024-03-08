import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Keeper Byte",
  description: "Keeper Byte , en Proceso de Desarollo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-Mx">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
