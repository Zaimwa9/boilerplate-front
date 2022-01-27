import { Header, BCol, BRow } from "design-system/index";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "../app/store";

import { useGetPokemonByNameQuery } from "../app/services/pokemon";

const AppPlaceholder = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  return (
    <Container>
      <BRow>
        <BCol>
          <Header />
        </BCol>
      </BRow>
      <BRow>
        <BCol justify="center">{isLoading ? "loading" : data.name}</BCol>
      </BRow>
      {error}
    </Container>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AppPlaceholder />
    </Provider>
  );
}

export default App;
