import Link from "next/link";

export const metadata = {
  title: "Keeper Byte | Sistemas y Telecomunicaciones",
  description: "Keeper Byte , en Proceso de Desarollo",
};

export default function SistemasLayout({ children }) {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link href="/sistemas/equiposComputo">Equipos de Computo</Link>
          </li>
          <li>
            <Link href="/sistemas/multifuncionales">Multifuncionales</Link>
          </li>
          <li>
            <Link href="/sistemas/asignaciones">Asignaciones</Link>
          </li>
          <li>
            <Link href="/sistemas/Movimientos">Movimientos</Link>
          </li>
          <li>
            <Link href="/sistemas/ipRouter">Ip Address</Link>
          </li>
        </ul>
      </div>
      {children}
    </>
  );
}
