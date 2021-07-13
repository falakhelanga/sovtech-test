import { gql } from "@apollo/client";

export const PEOPLE = gql`
  query People($page: String!) {
    People(page: $page) {
      next
      previous
      results {
        name
        mass
        height
        gender
        homeworld
      }
    }
  }
`;

export const HOME_WORLD = gql`
  query Homeworld($url: String!) {
    Homeworld(url: $url) {
      name
      rotation_period
      orbital_period
      diameter
      climate
      gravity
      terrain
      surface_water
      population
      residents
      films
    }
  }
`;

export const SEARCH = gql`
  query Search($search: String!) {
    Search(search: $search) {
      results {
        name
        mass
        height
        gender
        homeworld
      }
    }
  }
`;
