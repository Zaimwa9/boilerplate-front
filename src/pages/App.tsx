import { Header, BCol, BRow } from "design-system/index";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "../app/store";

const AppPlaceholder = () => (
  <Container>
    <BRow>
      <BCol>
        <Header />
      </BCol>
    </BRow>
    <BRow>
      <BCol justify="center">Lorem Ipsum</BCol>
    </BRow>
  </Container>
);

function App() {
  return (
    <Provider store={store}>
      <AppPlaceholder />;
    </Provider>
  );
}

export default App;
