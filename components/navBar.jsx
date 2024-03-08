import Link from "next/link";
import "@/components/navBar.css";

export default function NavBar() {
  return (
    <>
      <nav>
        <div className="logo">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/pruebita-bad82.appspot.com/o/nextJs_vercel%2Farrow_right_next_forward_icon_124688.png?alt=media&token=707704e2-2ed4-403f-988e-3e64ce324e55"
            alt="logo_keeper"
          />
          <h3>Keeper Byte</h3>
        </div>

        <ul className="navbar_Container">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/sistemas">Sistemas y Telecomunicaciones</Link>
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
