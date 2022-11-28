import classes from "./FormalList.module.css";
import FormalCard from "./FormalCard";

const FormalList = () => {
  return (
    <section className={classes["formal-list"]}>
      <h1>Formal Education</h1>
      <FormalCard
        title="Bachelor's Degree in Computer Programming"
        institution="Universidad Tecnológica Nacional - Facultad Regional Paraná"
        location="Paraná, Entre Ríos, Argentina"
        time="2020 - 2021"
      />
      <FormalCard
        title="First Certificate in English (B2)"
        institution="University of Cambridge"
        location="Cambridge, England"
        time="2008"
      />
      <FormalCard
        title="English Academy Graduate"
        institution="Advance School of English"
        location="Paraná, Entre Ríos, Argentina"
        time="2000 - 2007"
      />
    </section>
  );
};
export default FormalList;
