import classes from "./index.module.css";
import Navbar from "../../layout/Navbar/Navbar";
import JobCard from "./components/JobCard";
import getJobLongevity from "../../utilities/JobLongevityCalculator";
import Head from "next/head";

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
        <JobCard
          company="Grandi y Asociados SRL"
          position="Developer - Internship"
          date="Aug 2021 | Nov 2021"
          time="[ 4 months ]"
          descriptions={[
            "Created a Webhook in Java that cosumed services from ChatAPI and DriveAPI.",
          ]}
        />
        <JobCard
          company="Integral Software SRL"
          position="Fullstack Developer"
          date="Dec 2021 | Apr 2022"
          time="[ 5 months ]"
          descriptions={[
            "Java development and maintenance of a health management system full cycle and RestAPI integration.",
          ]}
        />
        <JobCard
          company="GlobalLogic - Latin America"
          position="Software Engineer"
          date="May 2022 | Present"
          time={`[ ${getJobLongevity(new Date(2022, 3, 16), new Date())} ]`}
          descriptions={[".NET Microservices Developer.", "GL Green proyect."]}
        />
      </main>
    </>
  );
};
export default Experience;
