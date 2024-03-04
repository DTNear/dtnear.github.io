import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "@/components/Particle";

import Type from "./Type";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              

              <h1 className="heading-name">
                All
                <strong className="main-name"> we need </strong> is
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

          </Row>
        </Container>
      </Container>
      
    </section>
  );
}
export default Home;

