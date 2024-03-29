import Link from "next/link";
import "@/app/design.css"

export const metadata = {
  title: "Keeper Byte | Capital Humano",
  description: "Keeper Byte , en Proceso de Desarollo",
};

export default function CapitalHumanoLayout({ children }) {
  return (
    <>
      <div className="navBar_GeneralContainer">
        <ul>
          <li>
            <Link href="/capitalHumano/directorio">Directorio</Link>
          </li>
          <li>
            <Link href="/capitalHumano/appchecar">App Checar</Link>
          </li>
        </ul>
      </div>
      {children}
    </>
  );
}
