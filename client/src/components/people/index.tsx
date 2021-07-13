import Person from "../person/index";
import { Container } from "../../styledComponents/People";
import { FC } from "react";
interface PersonType {
  gender: string;
  height: string;
  homeworld: string;
  name: string;
  mass: string;
}
interface PeopleType {
  people: PersonType[];
}
const People: FC<PeopleType> = ({ people }): JSX.Element => {
  return (
    <Container className="  w-100 d-flex justify-content-center">
      <div className="row   w-100  ">
        {people?.map((person: PersonType, index) => {
          return (
            <Person
              key={index}
              person={{
                name: person.name,
                gender: person.gender,
                mass: person.mass,
                height: person.height,
                homeworld: person.homeworld,
              }}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default People;
