import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://0w1y2kyksf.execute-api.ap-southeast-2.amazonaws.com/prod/graphql",
  cache: new InMemoryCache(),
});

export default client;
