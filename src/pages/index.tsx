import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Github from "../../public/icons/Github";
import Linkedin from "../../public/icons/Linkedin";
import Whatsapp from "../../public/icons/Whatsapp";
import { EXTERNAL_LINKS } from "../utilities/ExternalLinks";

import MediaLinkButton from "../components/UI/MediaLinkButton";
import OutlineLinkButton from "../components/UI/OutlineLinkButton";
import classes from "./index.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Julian Cabrera</title>
        <meta name="description" content="Julian Cabrera's portfolio" />
      </Head>
      <main className={classes.main}>
        <section className={classes["main-section"]}>
          <p className={classes.heading}>
            Hi !
            <br />
            My name is
            <span> Julián</span>,
            <br />
            I am a
            <span> Software Engineer</span>
          </p>
          <OutlineLinkButton path="/contact">Contact me</OutlineLinkButton>
        </section>
        <nav className={classes.navitems}>
          <Link href="/profile">
            <p className={classes.heading}>Profile</p>
          </Link>
          <Link href="/skills">
            <p className={classes.heading}>Skills</p>
          </Link>
          <Link href="/education">
            <p className={classes.heading}>Education</p>
          </Link>
          <Link href="/experience">
            <p className={classes.heading}>Experience</p>
          </Link>
        </nav>
        <nav className={classes.socialmedia}>
          <MediaLinkButton path={EXTERNAL_LINKS.WHATSAPP}>
            <Whatsapp />
          </MediaLinkButton>
          <MediaLinkButton path={EXTERNAL_LINKS.LINKEDIN}>
            <Linkedin />
          </MediaLinkButton>
          <MediaLinkButton path={EXTERNAL_LINKS.GITHUB}>
            <Github />
          </MediaLinkButton>
        </nav>
      </main>
    </>
  );
};
export default Home;
