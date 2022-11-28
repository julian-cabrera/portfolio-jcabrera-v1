import ExternalLink from "../../../../public/icons/ExternalLink";
import Github from "../../../../public/icons/Github";
import classes from "./CourseCard.module.css";

type Props = {
  name: string;
  author: string;
  link: string;
  repository: string;
};

const CourseCard: React.FC<Props> = (props) => {
  return (
    <article className={classes["course-card"]}>
      <h2>{props.name}</h2>
      <div>
        <h3>{props.author}</h3>
        <a href={props.link} target="_blank" rel="noreferrer">
          <ExternalLink />
        </a>
        {props.repository !== "" ? (
          <a href={props.repository} target="_blank" rel="noreferrer">
            <Github />
          </a>
        ) : null}
      </div>
    </article>
  );
};
export default CourseCard;
