import Circle from "../../../public/icons/Circle";
import { RATING } from "../../utilities/Skills";
import classes from "./SkillBar.module.css";

const SkillBar: React.FC = () => {
  return (
    <nav className={classes.skillbar}>
      <ul>
        <li className={classes["bg-beginner"]}>
          <Circle color={RATING.BEGINNER.color} />
          <span>{RATING.BEGINNER.text}</span>
        </li>
        <li className={classes["bg-intermediate"]}>
          <Circle color={RATING.INTERMEDIATE.color} />
          <span>{RATING.INTERMEDIATE.text}</span>
        </li>
        <li className={classes["bg-advanced"]}>
          <Circle color={RATING.ADVANCED.color} />
          <span>{RATING.ADVANCED.text}</span>
        </li>
      </ul>
    </nav>
  )
}
export default SkillBar;