import { Header, BCol, BRow } from "design-system/index";
import { Container } from "react-bootstrap";

function App() {
  return (
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
}

export default App;
