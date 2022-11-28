import Link from "next/link";
import classes from "./OutlineLinkButton.module.css";

type Props = {
  path: string;
  children: React.ReactNode;
};

const OutlineButton: React.FC<Props> = ({ path, children }) => {
  return (
    <Link href={path}>
      <button className={classes["btn-outline"]}>{children}</button>
    </Link>
  );
};
export default OutlineButton;
