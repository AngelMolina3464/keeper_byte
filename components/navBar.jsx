import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/sistemas">
              Sistemas y Telecomunicaciones
            </Link>
          </li>
          <li>
            <Link href="/capitalHumano">Capital Humano</Link>
          </li>
          <li>
            <Link href="/devops">DevOps </Link>
          </li>
          <li>
            <Link href="/labops">LabOps </Link>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
