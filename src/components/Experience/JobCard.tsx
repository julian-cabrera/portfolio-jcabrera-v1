import classes from "./JobCard.module.css";
import JobTechStack from "./JobTechStack";


type Props = {
  company: string,
  position: string,
  date: string,
  time: string,
  descriptions: Descriptions[];  
};

type Descriptions = {
  description: string,
    stack: {
      main: string,
      sub: string[]
    }[]
}

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
        {
          props.descriptions.map((e, i) => 
            <JobTechStack key={i} description={e.description} stack={e.stack}/>
          )
        }
      </ul>
    </article>
  );
};
export default JobCard;