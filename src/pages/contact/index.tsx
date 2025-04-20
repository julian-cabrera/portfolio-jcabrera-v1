import Head from "next/head";
import Envelope from "../../../public/icons/Envelope";
import Github from "../../../public/icons/Github";
import Linkedin from "../../../public/icons/Linkedin";
import Location from "../../../public/icons/Location";
import Phone from "../../../public/icons/Phone";
import Navbar from "../../layout/Navbar/Navbar";
import classes from "./index.module.css";
import { EXTERNAL_LINKS } from "../../utilities/ExternalLinks";
import CopyToClipboard from "../../components/CopyToClipboard/CopyToClipboard";

const Contact = () => {
    return (
    <>
      <Head>
        <title>Julian Cabrera - Contact</title>
        <meta
          name="description"
          content="Julian Cabrera's portfolio - Contact section"
        />
      </Head>
      <Navbar />
      <main className={classes.main}>
        <section className={classes.info}>
          <ul>
            <li className={classes.icon1}>
              <Phone />
            </li>
            <li className={classes.icon2}>
              <Envelope />
            </li>
            <li className={classes.icon3}>
              <Linkedin />
            </li>
            <li className={classes.icon4}>
              <Github />
            </li>
            <li className={classes.icon5}>
              <Location />
            </li>
            <li className={classes.item6}>
              <a href={EXTERNAL_LINKS.WHATSAPP} target="_blank" rel="noreferrer">
                +54 343 4620007
              </a>
            </li>
            <li className={classes.item7}>
              <CopyToClipboard text="julian.e.cabrera@hotmail.com"/>
            </li>
            <li className={classes.item8}>
              <a href={EXTERNAL_LINKS.LINKEDIN} target="_blank" rel="noreferrer">
                linkedin.com/in/cabrerajulian
              </a>
            </li>
            <li className={classes.item9}>
              <a href={EXTERNAL_LINKS.GITHUB} target="_blank" rel="noreferrer">
                github.com/julian-cabrera
              </a>
            </li>
            <li className={classes.item10}>
              <a href={EXTERNAL_LINKS.LOCATION} target="_blank" rel="noreferrer">
                Paraná, Entre Ríos, Argentina
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};
export default Contact;
