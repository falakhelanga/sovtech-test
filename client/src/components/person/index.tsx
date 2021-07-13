import { Container, Wrapper } from "../../styledComponents/person";
import { useHistory } from "react-router-dom";
import PersonType from "../../interfaces/Person";
import { useDispatch } from "react-redux";
import { FC } from "react";
import { detailasAction } from "../../redux/slices/details";

const Person: FC<PersonType> = ({ person }): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <Wrapper
      className="col-sm-12 col-md-6  mt-3   "
      onClick={() => {
        dispatch(
          detailasAction.goToPage({
            name: person.name,
            gender: person.gender,
            mass: person.mass,
            height: person.height,
            homeworld: person.homeworld,
          })
        );
        history.push("/details");
      }}
    >
      <Container className="mx-2 ps-3 py-3">
        <h3 className="fw-bold text-capitalize">{person.name}</h3>
        <p className="text-capitalize">
          gender : <span>{person.gender}</span>
        </p>
        <p className="text-capitalize">
          mass : <span>{person.mass}</span>
        </p>
        <p className="text-capitalize">
          height : <span>{person.height}</span>
        </p>
      </Container>
    </Wrapper>
  );
};

export default Person;
