import Pagination from "../../components/pagination";
import People from "../../components/people";
import { Container } from "../../styledComponents/home";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/index";
import { useQuery } from "@apollo/client";
import { PEOPLE } from "../../graphql/queries";
import Loader from "../../components/loader/index";

const Home = (): JSX.Element => {
  const page = useSelector((state: RootState) => state.paginationReducer.page);
  const stringPage = page.toString();
  const { loading, data, fetchMore } = useQuery(PEOPLE, {
    variables: { page: stringPage },
  });
  const people = data?.People?.results;
  const next = data?.People?.next;
  const previous = data?.People?.previous;
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
        <Container className="container">
          <People people={mappedPeople} />
        </Container>
      )}

      {data && (
        <div className="mt-3 d-flex justify-content-center align-items-center">
          <Pagination next={next} prev={previous} fetchMore={fetchMore} />
        </div>
      )}
    </>
  );
};

export default Home;
