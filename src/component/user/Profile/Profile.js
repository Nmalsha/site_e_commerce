import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../userContext/UserContext.js";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Profile";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="profile-card">
            <Card.Body>
              <Card.Title className="profile-title">
                Profile Information
              </Card.Title>
              <div className="profile-details">
                <p>
                  <strong>First Name:</strong> {user.prenom}
                </p>
                <p>
                  <strong>Last Name:</strong> {user.nom}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Role:</strong> {user.role}
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
