import { useEffect, useState } from "react";
import classes from "./CopyToClipboard.module.css";

type Props = {
  text: string;
};

const CopyToClipboard: React.FC<Props> = ({ text }) => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(true);
    navigator.clipboard.writeText("julian.e.cabrera@hotmail.com");
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsClicked(false), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [isClicked]);

  return (
    <>
      {isClicked && <div className={classes.popup}>Copied to clipboard!</div>}
      <div className={classes.text} onClick={clickHandler}>
        {text}
      </div>
    </>
  );
};
export default CopyToClipboard;
