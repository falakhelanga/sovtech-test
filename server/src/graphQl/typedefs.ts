import { gql } from "apollo-server-lambda";

const typeDefs = gql`
  type Homeworld {
    name: String
    rotation_period: String
    orbital_period: String
    diameter: String
    climate: String
    gravity: String
    terrain: String
    surface_water: String
    population: String
    residents: [String]
    films: [String]
  }

  type Person {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: String
  }

  type People {
    next: String
    previous: String
    results: [Person]!
  }

  type Query {
    People(page: String): People!
    Person(id: String): Person!
    Search(search: String): People!
    Homeworld(url: String): Homeworld!
  }
`;

export default typeDefs;
