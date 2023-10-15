import { useState } from "react";
import classes from "./JobTechStack.module.css"

type Props = {
    description: string;
    stack: {
      main: string,
      sub: string[]
    }[];
}

const JobTechStack: React.FC<Props> = (props) => {
  const [showTxtarea, setShowTxtarea] = useState(false);

  const toggleHandler = () => {
    setShowTxtarea(!showTxtarea);
  }

  const formattedStack = () => {
    var techstack = [...props.stack];
    return (
      techstack.map((e, i) => (
        <p key={i}>
          {`${e.main}`}
          {e.sub.map((s, idx) => (
              <span key={idx}>
                {`${s}`}
              </span>
            ))}
        </p>
      ))
    )
  }
  
  return (
    <div className={classes.techstack}>
      <li>{props.description}</li>
      <button onClick={toggleHandler}>{showTxtarea ? "Close" : "Show Techs"}</button>
      {
        showTxtarea && formattedStack()
      }
    </div>
  )
}
export default JobTechStack