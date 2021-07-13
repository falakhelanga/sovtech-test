const resolvers = {
  Query: {
    // this resolver is fetching all people from  starwarsAPI
    People: async (_: any, { page }: any, { dataSources }: any) => {
      return dataSources.starWarsAPI.getPeople(page);
    },

    // this resolver is fetching one person from  starwarsAPI
    Person: async (_: any, { id }: any, { dataSources }: any) => {
      return dataSources.starWarsAPI.getPersonById(id);
    },

    // this resolver is fetching all peaple with a name matching query-string = search
    Search: async (_: any, { search }: any, { dataSources }: any) => {
      return dataSources.starWarsAPI.getPerson(search);
    },

    // this resolver is fetching all peaple with a name matching query-string = search
    Homeworld: async (_: any, { url }: any, { dataSources }: any) => {
      return dataSources.starWarsAPI.getHomeWorld(url);
    },
  },
};

export default resolvers;
