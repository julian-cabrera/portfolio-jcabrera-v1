import Link from "next/link";
import Envelope from "../../../public/icons/Envelope";
import Github from "../../../public/icons/Github";
import Linkedin from "../../../public/icons/Linkedin";
import { EXTERNAL_LINKS } from "../../utilities/ExternalLinks";
import classes from "./IconBar.module.css";

const IconBar = () => {
  return (
    <nav className={classes.iconbar}>
      <ul>
        <li>
          <a href={EXTERNAL_LINKS.LINKEDIN} target="_blank" rel="noreferrer">
            <Linkedin />
          </a>
        </li>
        <li>
          <a href={EXTERNAL_LINKS.GITHUB} target="_blank" rel="noreferrer">
            <Github />
          </a>
        </li>
        <li>
          <Link href="/contact">
            <button>
              <Envelope />
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default IconBar;
