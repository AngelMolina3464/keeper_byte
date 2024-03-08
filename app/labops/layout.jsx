import Link from "next/link";
import "@/app/design.css"

export const metadata = {
  title: "Keeper Byte | LabOps",
  description: "Keeper Byte , en Proceso de Desarollo",
};

export default function DevopsLayout({ children }) {
  return (
    <>
      <div className="navBar_GeneralContainer">
        <ul>
          <li>
            <Link href="/devops/techs">Coneccion con Firebase</Link>
          </li>
          <li>
            <Link href="/devops/proyectos">Conceccion con AppChecar</Link>
          </li>
          <li>
            <Link href="/devops/proyectos">Reloj Js</Link>
          </li>
          <li>
            <Link href="/devops/proyectos">Dynamic</Link>
          </li>
        </ul>
      </div>
      {children}
    </>
  );
}