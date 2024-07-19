import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";
import "./ClientSpace.css";

const ClientSpace = () => {
  return (
    <Container fluid>
      <Row>
        <Col className=" sidebar custom-sidebar">
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/client-space/login" className="font_style">
              Identification
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/client-space/register"
              className="font_style"
            >
              Créer un compte
            </Nav.Link>
          </Nav>
        </Col>
        <Col sm={10} className="content">
          <Routes>
            <Route path="/client-space/register" element={<RegisterForm />} />
            <Route path="/client-space/login" element={<LoginForm />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default ClientSpace;
