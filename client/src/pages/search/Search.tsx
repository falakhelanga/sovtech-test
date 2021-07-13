import People from "../../components/people";
import { Container } from "../../styledComponents/home";
import { useQuery } from "@apollo/client";
import { SEARCH } from "../../graphql/queries";
import Loader from "../../components/loader/index";
import { useParams } from "react-router-dom";

const Search = (): JSX.Element => {
  interface Search {
    search: string;
  }
  const { search } = useParams<Search>();

  const { loading, data } = useQuery(SEARCH, {
    variables: { search },
  });

  const people = data?.Search?.results;

  const mappedPeople = people?.map((person: any) => {
    return {
      name: person.name,
      gender: person.gender,
      mass: person.mass,
      height: person.height,
      homeworld: person.homeworld,
    };
  });

  return (
    <>
      {loading && (
        <div className="w-100 " style={{ height: "100%" }}>
          <Loader />
        </div>
      )}
      {data && (
        <Container className="container flex-column">
          {people.length === 0 && <h2>No Results Found!</h2>}
          <People people={mappedPeople} />
        </Container>
      )}
    </>
  );
};

export default Search;
