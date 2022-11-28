import Circle from "../../../../public/icons/Circle";
import classes from "./SkillLabel.module.css";

type Props = {
  name: string;
  rating: string;
};

const SkillLabel: React.FC<Props> = ({ name, rating }) => {
  return (
    <label className={classes.tag}>
      <span>{name}</span>
      <Circle color={rating} />
    </label>
  );
};
export default SkillLabel;
