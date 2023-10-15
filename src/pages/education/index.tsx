import classes from "./index.module.css";
import Navbar from "../../layout/Navbar/Navbar";
import CourseList from "./../../components/Education/CourseList";
import FormalList from "./../../components/Education/FormalList";
import Head from "next/head";

const Education = () => {
  return (
    <>
      <Head>
        <title>Julian Cabrera - Education</title>
        <meta
          name="description"
          content="Julian Cabrera's portfolio - Education section"
        />
      </Head>
      <Navbar />
      <main className={classes.education}>
        <FormalList />
        <CourseList />
      </main>
    </>
  );
};
export default Education;
