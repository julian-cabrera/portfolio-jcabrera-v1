import classes from "./index.module.css";
import Navbar from "../../layout/Navbar/Navbar";
import Head from "next/head";
import JobCard from "../../components/Experience/JobCard";
import { JOBS } from "../../utilities/Jobs";

const Experience = () => {
  return (
    <>
      <Head>
        <title>Julian Cabrera - Experience</title>
        <meta
          name="description"
          content="Julian Cabrera's portfolio - Experience section"
        />
      </Head>
      <Navbar />
      <main className={classes.jobs}>
        {JOBS.map((e,i) => (
          <JobCard
            key={i}
            company={e.company}
            position={e.position}
            date={e.date}
            time={e.time}
            descriptions={e.descriptions}
          />
        ))}
      </main>
    </>
  );
};
export default Experience;