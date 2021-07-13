import Header from "./header";
import Main from "./main";
import { Container } from "../styledComponents/layout";
import { FC } from "react";
import Footer from "./footer";

const LayOut: FC = ({ children }): JSX.Element => {
  return (
    <Container className="">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default LayOut;
