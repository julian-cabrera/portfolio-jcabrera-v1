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
      <h2>{props.title}</h2>
      <h3>{props.institution}</h3>
      <h4>{props.location}</h4>
      <h5>{props.time}</h5>
    </article>
  );
};
export default FormalCard;
