import Search from "../../components/search";
import { Container } from "../../styledComponents/header";
import { useHistory } from "react-router-dom";

const Header = (): JSX.Element => {
  const history = useHistory();
  return (
    <Container className=" py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <h1
          className="text-capitalize fw-bold  "
          onClick={() => {
            history.push("/");
          }}
        >
          Star wars
        </h1>
        <Search />
      </div>
    </Container>
  );
};

export default Header;
