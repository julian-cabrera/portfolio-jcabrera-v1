import classes from "./SkillCard.module.css";
import SkillLabel from "./SkillLabel";

type Props = {
  name: string;
  labels: { name: string; rating: string }[];
};
const SkillCard: React.FC<Props> = ({ name, labels }) => {
  return (
    <article className={classes.card}>
      <span className={classes.name}>{name}</span>
      <div className={classes.labels}>
        {labels.map((label, index) => (
          <SkillLabel key={index} name={label.name} rating={label.rating} />
        ))}
      </div>
    </article>
  );
};
export default SkillCard;
