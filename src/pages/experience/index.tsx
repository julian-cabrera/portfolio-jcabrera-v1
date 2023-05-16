import classes from "./index.module.css";
import Navbar from "../../layout/Navbar/Navbar";
import getDateDiff from "../../utilities/DateDiffCalculator";
import Head from "next/head";
import JobCard from "../../components/Experience/JobCard";

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
          descriptions={[{project: "ChatAPI Integration", description: "Created a Webhook in Java 8 that cosumed services from ChatAPI and DriveAPI."}]}
        />
        <JobCard
          company="Integral Software SRL"
          position="Fullstack Developer"
          date="Dec 2021 | Apr 2022"
          time="[ 5 months ]"
          descriptions={[
            {project: "Java 8 Legacy Project", description: "Java 8 development and maintenance of a health management system full cycle and RestAPI integration."},
          ]}
        />
        <JobCard
          company="GlobalLogic - Latin America"
          position="Software Engineer"
          date="May 2022 | Present"
          time={`[ ${getDateDiff(new Date(2022, 3, 16), new Date())} ]`}
          descriptions={[
            {project: "GL Green Initiative", description: "Participated in the design and building process of a .NET Microservices and React application."},
            {project: ".NET Legacy Project", description: "Currently developing automated tests with Selenium on a VB Legacy project."}
          ]}
        />
      </main>
    </>
  );
};
export default Experience;
