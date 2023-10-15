import classes from "./index.module.css";
import Navbar from "../../layout/Navbar/Navbar";
import avatar from "../../../public/images/my-avatar.png";
import Image from "next/image";
import Head from "next/head";
import OutlineButton from "../../components/UI/OutlineLinkButton";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Julian Cabrera - Profile</title>
        <meta
          name="description"
          content="Julian Cabrera's portfolio - Profile section"
        />
      </Head>
      <Navbar />
      <main className={classes.profile}>
        <section className={classes["intro-section"]}>
          <p className={classes.intro}>
            <span>Hello!</span>
            <br />
            {`I'm a Software Engineer from Argentina.`}
            <br />
            {`I focus mainly on Backend development.`}
          </p>
          <div className={classes.wrapper}>
            <Image src={avatar} alt="my-avatar" />
          </div>
        </section>
        <section>
          <p>
            {`I started studying computer programming in early 2020 and fell in love with it.`}
            <br />
            {`It felt very natural to me as I already had many qualities for that skill.`}
          </p>
          <p className={classes["p-heading"]}>
            {`I'm a dedicated, independent, well-organized and detail-oriented person.`}
          </p>
          <p>
            {`I'll confidently take on tasks without being reckless.`}
            <br />
            {`I'm quite curious, so I don't mind looking into or trying new things.`}
            <br />
            {`I'm always trying to improve! As a person and professional, I strive for a better version of myself!`}
          </p>
          <p className={classes["p-heading"]}>
            {`I love travelling and outdoor activities. I'm also a fan of martial arts, music and movies!`}
          </p>
          <p>
            {`I enjoy taking trips and exploring the world, visiting new places and being in touch with nature.`}
            <br />
            {`I am also a Brazillian Jiu-Jitsu practicioner, adding discipline and respect among other values to my profile.`}
          </p>
          <br />
          <hr />
          <p>
            {`I'm excited to continue pushing the boundaries of what's possible in software engineering and look forward to new challenges and opportunities.`}
          </p>
          <OutlineButton path="/contact">
            {`Feel free to reach out if you see exciting opportunities on the horizon were we can push the boundaries of software engineering!`}
          </OutlineButton>
        </section>
      </main>
    </>
  );
};
export default Profile;
