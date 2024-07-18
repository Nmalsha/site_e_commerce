import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [mdp, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        " https://api-dev.akov-developpement.fr/api/users/login",
        {
          email,
          mdp,
        }
      );

      const userData = response.data;
      setSuccessMessage("User logged successfully!");
      localStorage.setItem("userData", JSON.stringify(userData));

      if (userData.role === "ADMIN") {
        navigate("/admin/products");
      } else {
        navigate("/products");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Error login user. Please try again.");
    }
  };
  return (
    <div
      className="container mt-5"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {error && <div className="alert alert-danger">{error}</div>}
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}
      <div
        className="login_form"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          backgroundColor: "#5b4b61",
          width: "60%",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            marginTop: "20px",
            width: "80%",
            justifyContent: "center",
            flexDirection: "column",
            borderRadius: "20px",
          }}
        >
          <h2>Identification</h2>
          <div style={{ marginTop: "20px" }}>
            <div className="mb-3" style={{ marginTop: "20px" }}>
              <label htmlFor="email" className="form-label">
                Nom d'utilisateur
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Mot de passe
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={mdp}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-secondary">
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
