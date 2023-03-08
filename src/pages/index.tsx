import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Github from "../../public/icons/Github";
import Linkedin from "../../public/icons/Linkedin";
import Whatsapp from "../../public/icons/Whatsapp";
import ExternalLinks from "../utilities/ExternalLinks";

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
            <br />I am a<span> Software Engineer</span> !
          </p>
          <OutlineLinkButton path="/contact">Contact me!</OutlineLinkButton>
          <a
            href="https://drive.google.com/uc?export=download&id=1MuoPOR-_LSHOuVsxtElLOBAwzsSB2TNL"
            download>
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"
              />
            </svg>
          </a>
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
          <MediaLinkButton path={ExternalLinks.WHATSAPP}>
            <Whatsapp />
          </MediaLinkButton>
          <MediaLinkButton path={ExternalLinks.LINKEDIN}>
            <Linkedin />
          </MediaLinkButton>
          <MediaLinkButton path={ExternalLinks.GITHUB}>
            <Github />
          </MediaLinkButton>
        </nav>
      </main>
    </>
  );
};
export default Home;
