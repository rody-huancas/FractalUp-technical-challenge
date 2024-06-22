import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { API_URL } from "../constants";

export const client = new ApolloClient({
  connectToDevTools: true,
  link: new HttpLink({
    uri: API_URL,
  }),
  cache: new InMemoryCache(),
});
