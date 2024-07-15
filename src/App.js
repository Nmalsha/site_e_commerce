import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./component/Home/Home";
import Products from "./component/Product/Product.js";
import Contact from "./component/Contact/Contact.js";
import ClientSpace from "./component/User/ClientSpace/ClientSpace.js";
import RegisterForm from "./component/User/RegisterForm/RegisterForm.js";
import LoginForm from "./component/User/LoginForm/LoginForm.js";

function App() {
  return (
    <Router>
      <div className="App">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-dark"
          style={{ height: "80px" }}
        >
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/" style={{ color: "white" }}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/products"
                    style={{ color: "white" }}
                  >
                    Produits
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/contact"
                    style={{ color: "white" }}
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/client-space/"
                    style={{ color: "white" }}
                  >
                    Espace Client
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/register/"
                    style={{ color: "white" }}
                  >
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/login/"
                    style={{ color: "white" }}
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/client-space/*" element={<ClientSpace />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
