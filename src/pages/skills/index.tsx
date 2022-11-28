import classes from "./index.module.css";
import Navbar from "../../layout/Navbar/Navbar";
import Image from "next/image";
import wordcloud from "../../../public/images/wordcloud.png";
import SKILL_SET, { RATING } from "./util/Skills";
import SkillCard from "./components/SkillCard";
import RatingCard from "./components/RatingCard";
import Head from "next/head";

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
        <section className={classes.wordcloud}>
          <Image src={wordcloud} alt="wordart" />
        </section>
        <section className={classes.rating}>
          <RatingCard
            name="BASIC"
            color={RATING.BASIC.color}
            text={RATING.BASIC.text}
          />
          <RatingCard
            name="BEGINNER"
            color={RATING.BEGINNER.color}
            text={RATING.BEGINNER.text}
          />
          <RatingCard
            name="INTERMEDIATE"
            color={RATING.INTERMEDIATE.color}
            text={RATING.INTERMEDIATE.text}
          />
          <RatingCard
            name="ADVANCED"
            color={RATING.ADVANCED.color}
            text={RATING.ADVANCED.text}
          />
          <RatingCard
            name="OVER9000"
            color={RATING.OVER9000.color}
            text={RATING.OVER9000.text}
          />
        </section>
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
      </main>
    </>
  );
};
export default Skills;
