import { Inter } from "next/font/google";
import NavBar from "@/components/navBar.jsx";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Keeper Byte",
  description: "Keeper Byte , en Proceso de Desarollo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
