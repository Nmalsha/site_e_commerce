import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";

const ClientSpace = () => {
  return (
    <div className="container mt-5">
      <h2>Espace Client</h2>
      <nav>
        <ul>
          <li>
            <Link to="/client-space/register">Créer un compte</Link>
          </li>
          <li>
            <Link to="/client-space/login">Identification</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/client-space/*" element={<ClientSpaceRoutes />} />
      </Routes>
    </div>
  );
};

const ClientSpaceRoutes = () => {
  return (
    <Routes>
      <Route path="/client-space/register" element={<RegisterForm />} />
      <Route path="/client-space/login" element={<LoginForm />} />
    </Routes>
  );
};

export default ClientSpace;
