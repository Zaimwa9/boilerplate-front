import App from "pages/App";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <>
              <Container fluid>
                <Row>
                  <Col>yo</Col>
                  <Col>yo</Col>
                  <Col>o</Col>
                  <Col>yo</Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col>1 of 3</Col>
                  <Col sm={6}>2 of 3 (wider)</Col>
                  <Col>3 of 3</Col>
                </Row>
                <Row>
                  <Col>1 of 3</Col>
                  <Col xs={5}>2 of 3 (wider)</Col>
                  <Col>3 of 3</Col>
                </Row>
              </Container>{" "}
            </>
          )}
        />
        <Route exact path="/app" component={App} />
      </Switch>
    </Router>
  );
};
