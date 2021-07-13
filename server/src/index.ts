import { ApolloServer } from "apollo-server-lambda";
import StarWarsAPI from "./datasources/index";
import typeDefs from "./graphQl/typedefs";
import resolvers from "./graphQl/resolvers";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      starWarsAPI: new StarWarsAPI(),
    };
  },
});

export const graphqlHandler = apolloServer.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
});
