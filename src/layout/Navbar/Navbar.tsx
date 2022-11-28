import Link from "next/link";
import { useRouter } from "next/router";
import IconBar from "./IconBar";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const router = useRouter();

  return (
    <header className={classes.navbar}>
      <section>
        <Link href="/">
          <div className={classes.home}>
            <span className={classes.name}>Julián</span>
            <span className={classes.surname}>Cabrera</span>
          </div>
        </Link>
      </section>
      <nav className={classes.links}>
        <ul>
          <li
            className={
              router.pathname === "/profile" ? `${classes["active-link"]}` : ""
            }>
            <Link href="/profile">
              <h3>Profile</h3>
            </Link>
          </li>
          <li
            className={
              router.pathname === "/skills" ? `${classes["active-link"]}` : ""
            }>
            <Link href="/skills">
              <h3>Skills</h3>
            </Link>
          </li>
          <li
            className={
              router.pathname === "/education"
                ? `${classes["active-link"]}`
                : ""
            }>
            <Link href="/education">
              <h3>Education</h3>
            </Link>
          </li>
          <li
            className={
              router.pathname === "/experience"
                ? `${classes["active-link"]}`
                : ""
            }>
            <Link href="/experience">
              <h3>Experience</h3>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={classes.iconbar}>
        <IconBar />
      </div>
    </header>
  );
};
export default Navbar;
