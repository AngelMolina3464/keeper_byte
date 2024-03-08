import Link from "next/link";
import "@/app/design.css"

export const metadata = {
  title: "Keeper Byte | Sistemas y Telecomunicaciones",
  description: "Keeper Byte , en Proceso de Desarollo",
};

export default function CapitalHumanoLayout({ children }) {
  return (
    <>
      <div className="navBar_GeneralContainer">
        <ul>
          <li>
            <Link href="/sistemas/equiposComputo">Directorio</Link>
          </li>
          <li>
            <Link href="/sistemas/multifuncionales">App Checar</Link>
          </li>
          <li>
            <Link href="/sistemas/asignaciones">Asignaciones Actuales</Link>
          </li>
        </ul>
      </div>
      {children}
    </>
  );
}
