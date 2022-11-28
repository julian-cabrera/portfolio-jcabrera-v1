import classes from "./index.module.css";
import Navbar from "../../layout/Navbar/Navbar";
import avatar from "../../../public/images/my-avatar.png";
import Image from "next/image";
import Head from "next/head";

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
            {`Hello there!`}
            <br />
            {`I'm a Software Developer located in Argentina.`}
            <br />
            {`I focus mainly on Microservices Backend development.`}
          </p>
          <div className={classes.wrapper}>
            <Image src={avatar} alt="my-avatar" />
          </div>
        </section>
        <section>
          <p>
            {`I started studying computer programming in early 2020 and fell in love with it.`}
            <br />
            {`It felt very natural to me as I already had many qualities for it.`}
          </p>
          <p
            className={
              classes["p-heading"]
            }>{`I'm a dedicated, independent, well-organized and detail-oriented person.`}</p>
          <p>
            {`I'll confidently take on tasks without being reckless.`}
            <br />
            {`I'm quite curious, so I don't mind looking into or trying new things.`}
            <br />
            {`I'm always trying to improve! As a person and professional, I strive for a better version of myself!`}
          </p>
          <p
            className={
              classes["p-heading"]
            }>{`I love travelling and the outdoors. I'm also a big fan of martial arts, music and movies!`}</p>
          <p>
            {`Although I haven't travelled much, I enjoy taking trips and exploring the world, visiting new places and being in touch with nature.`}
            <br />
            {`I've trained in different martial arts through the years as a sport. I value the respect and discipline they teach us the most, among many other values.`}
          </p>
        </section>
      </main>
    </>
  );
};
export default Profile;
