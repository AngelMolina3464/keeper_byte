import Link from "next/link";
import "@/app/design.css"

export const metadata = {
  title: "Keeper Byte | DevOps",
  description: "Keeper Byte , en Proceso de Desarollo",
};

export default function DevopsLayout({ children }) {
  return (
    <>
      <div className="navBar_GeneralContainer">
        <ul>
          <li>
            <Link href="/devops/techs">Tecnologias de Uso</Link>
          </li>
          <li>
            <Link href="/devops/proyectos">Proyectos</Link>
          </li>
        </ul>
      </div>
      {children}
    </>
  );
}