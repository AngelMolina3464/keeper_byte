import Link from "next/link";
import "@/app/design.css";

export const metadata = {
  title: "Keeper Byte | Contacto",
  description: "Keeper Byte , en Proceso de Desarollo",
};

export default function ContactoLayout({ children }) {
  return (
    <>
      <div className="navBar_GeneralContainer">
        <ul>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
      {children}
    </>
  );
}
