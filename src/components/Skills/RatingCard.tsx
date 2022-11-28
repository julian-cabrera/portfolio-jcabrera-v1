import Circle from "../../../public/icons/Circle";
import classes from "./RatingCard.module.css";

type Props = {
  color: string;
  name: string;
  text: string;
};

const RatingCard: React.FC<Props> = ({ color, name, text }) => {
  return (
    <div className={classes["rating-card"]} style={{ color: `${color}` }}>
      <div>
        <Circle color={color} />
        <span className={classes.name}>{name}</span>
      </div>
      <span className={classes.text}>{text}</span>
    </div>
  );
};
export default RatingCard;
