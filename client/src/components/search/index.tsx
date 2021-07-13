import { Container, Input, IconBtn } from "../../styledComponents/search";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = (): JSX.Element => {
  const [keyWord, setKeyWord] = useState("");
  const history = useHistory();
  return (
    <Container>
      <Input
        value={keyWord}
        onChange={(e) => {
          setKeyWord(e.target.value);
        }}
        type="text"
        placeholder="Search person..."
        className="ms-2 me-2"
      />
      <IconBtn
        onClick={() => {
          if (keyWord.trim() === "") {
            return;
          }
          history.push(`/${keyWord}`);
          setKeyWord("");
        }}
      >
        <SearchIcon />
      </IconBtn>
    </Container>
  );
};

export default Search;
