import { Container } from "../../styledComponents/main";
import { FC } from "react";

const Main: FC = ({ children }): JSX.Element => {
  return <Container className="mt-4">{children}</Container>;
};

export default Main;
