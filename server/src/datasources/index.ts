import { RESTDataSource } from "apollo-datasource-rest";

export default class StarWarsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://swapi.dev/api/";
  }

  // get all peaple
  async getPeople(page: string) {
    return await this.get(`people/?page=${page}`);
  }

  // get person by ID
  async getPersonById(id: string) {
    return await this.get(`people/${id}/`);
  }

  // get particular people by query-parameter = search
  async getPerson(search: string) {
    return await this.get(`people/?search=${search}`);
  }

  // get homeworld for particular person
  async getHomeWorld(url: string) {
    return await this.get(url);
  }
}
