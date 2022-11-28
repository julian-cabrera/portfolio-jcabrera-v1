import Link from "next/link";
import Envelope from "../../../public/icons/Envelope";
import Github from "../../../public/icons/Github";
import Linkedin from "../../../public/icons/Linkedin";
import ExternalLinks from "../../utilities/ExternalLinks";
import classes from "./IconBar.module.css";

const IconBar = () => {
  return (
    <nav className={classes.iconbar}>
      <ul>
        <li>
          <a href={ExternalLinks.LINKEDIN} target="_blank" rel="noreferrer">
            <Linkedin />
          </a>
        </li>
        <li>
          <a href={ExternalLinks.GITHUB} target="_blank" rel="noreferrer">
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
