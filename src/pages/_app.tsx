import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
function App({ Component, pageProps }: any) {
  return (
    <ApolloProvider client={client}>
      <div className="App" color='white'>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default App;
