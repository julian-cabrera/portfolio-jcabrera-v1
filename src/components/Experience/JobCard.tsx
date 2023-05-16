import classes from "./JobCard.module.css";

type Description = {
  project: string,
  description: string
}

type Props = {
  company: string;
  position: string;
  date: string;
  time: string;
  descriptions: Description[];
};

const JobCard: React.FC<Props> = (props) => {
  return (
    <article className={classes.card}>
      <h1>{props.company}</h1>
      <h2>{props.position}</h2>
      <h3>
        {props.date}
        <small>{props.time}</small>
      </h3>
      <ul>
        {props.descriptions.map((e, id) => (
          <div key={id}>
          <li>{e.project}</li>
          <p>{e.description}</p>
          </div>
        ))}
      </ul>
    </article>
  );
};
export default JobCard;
