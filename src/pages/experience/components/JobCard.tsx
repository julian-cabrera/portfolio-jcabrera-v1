import classes from "./JobCard.module.css";

type Props = {
  company: string;
  position: string;
  date: string;
  time: string;
  descriptions: string[];
};

const Card: React.FC<Props> = (props) => {
  return (
    <article className={classes.card}>
      <h1>{props.company}</h1>
      <h2>{props.position}</h2>
      <h3>
        {props.date}
        <small>{props.time}</small>
      </h3>
      <ul>
        {props.descriptions.map((description, id) => (
          <li key={id}>{description}</li>
        ))}
      </ul>
    </article>
  );
};
export default Card;
