import React, { useContext } from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Products from "../ProductsList/ProductList";
import Users from "../UsersList/UsersList";

const AdminSpace = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={2} className=" sidebar custom-sidebar">
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/admin/products" className="font_style">
              Products Handling
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/users" className="font_style">
              Users Handling
            </Nav.Link>
          </Nav>
        </Col>
        <Col sm={10} className="content">
          <Routes>
            <Route path="/products" element={<ProductsHandling />} />
            <Route path="/users" element={<UsersHandling />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

const ProductsHandling = () => {
  return (
    <>
      <Products />
    </>
  );
};

const UsersHandling = () => {
  return (
    <>
      <Users />
    </>
  );
};

export default AdminSpace;
