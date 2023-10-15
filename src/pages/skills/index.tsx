import classes from "./index.module.css";
import Navbar from "../../layout/Navbar/Navbar";
import { SKILL_SET } from "../../utilities/Skills";
import Head from "next/head";
import SkillCard from "../../components/Skills/SkillCard";
import SkillBar from "../../components/Skills/SkillBar";

const Skills = () => {
  return (
    <>
      <Head>
        <title>Julian Cabrera - Skills</title>
        <meta
          name="description"
          content="Julian Cabrera's portfolio - Skills section"
        />
      </Head>
      <Navbar />
      <main className={classes.skills}>
        <section>
          <span className={classes.heading}>Backend</span>
          {SKILL_SET.BACKEND.map((skill, index) => (
            <SkillCard key={index} name={skill.name} labels={skill.labels} />
          ))}
        </section>
        <section>
          <span className={classes.heading}>Frontend</span>
          {SKILL_SET.FRONTEND.map((skill, index) => (
            <SkillCard key={index} name={skill.name} labels={skill.labels} />
          ))}
        </section>
        <section>
          <span className={classes.heading}>General</span>
          {SKILL_SET.GENERAL.map((skill, index) => (
            <SkillCard key={index} name={skill.name} labels={skill.labels} />
          ))}
        </section>
        <section>
          <span className={classes.heading}>Other</span>
          {SKILL_SET.OTHER.map((skill, index) => (
            <SkillCard key={index} name={skill.name} labels={skill.labels} />
          ))}
        </section>
        <SkillBar />
        <div className={classes.separator}></div>
      </main>
    </>
  );
};
export default Skills;
