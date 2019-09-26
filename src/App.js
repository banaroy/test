import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Header } from "semantic-ui-react";

import Gnb01 from "./componts/header/Gnb01";
function App() {
  return (
    <div>
      <Container fluid>
        <Container>
          <Gnb01 />
        </Container>
      </Container>
      <Container>sdf</Container>
    </div>
  );
}

export default App;
