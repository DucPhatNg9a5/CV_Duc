import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function Navbar(props) {
  return (
    <nav className="bg-blue-900 py-2 flex justify-between font-bold text-lg">
      <h4 className="mr-auto">
        <Link href="/" className="hover:text-green-600 mx-2" title="Homepage">
          <FontAwesomeIcon icon={faHome} className="2x" /> Home
        </Link>
      </h4>

      <ul className="flex">
        <li>
          <Link
            href="/map"
            className="mx-2 hover:text-green-700"
            title="map"
          >
            Map
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className="mx-2 hover:text-green-600"
            title="My projects"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/background"
            className="mx-2 hover:text-green-700"
            title="About me"
          >
            Background
          </Link>
        </li>
      </ul>
    </nav>
  );
}
