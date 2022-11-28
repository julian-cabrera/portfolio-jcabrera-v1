import classes from "./MediaLinkButton.module.css";

type Props = {
  path: string;
  children: React.ReactNode;
};

const MediaButton: React.FC<Props> = ({ path, children }) => {
  return (
    <a href={path} target="_blank" rel="noreferrer">
      <button className={classes["btn-media"]}>{children}</button>
    </a>
  );
};
export default MediaButton;
