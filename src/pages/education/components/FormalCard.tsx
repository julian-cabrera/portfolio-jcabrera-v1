import classes from "./FormalCard.module.css";

type Props = {
  title: string;
  institution: string;
  location: string;
  time: string;
};

const FormalCard: React.FC<Props> = (props) => {
  return (
    <article className={classes["formal-card"]}>
      <h1>{props.title}</h1>
      <h2>{props.institution}</h2>
      <h3>{props.location}</h3>
      <h4>{props.time}</h4>
    </article>
  );
};
export default FormalCard;
