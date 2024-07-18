import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api-dev.akov-developpement.fr/api/users/save",
        {
          nom,
          prenom,
          email,
          mdp,
          role: "USER",
        }
      );
      console.log(response.data);

      setSuccessMessage("User registered successfully!");

      setNom("");
      setPrenom("");
      setEmail("");
      setMdp("");
      navigate("/login");
    } catch (error) {
      console.error("Error during registration:", error);
      setError("Error registering user. Please try again.");
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
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          width: "60%",
          backgroundColor: "#5b4b61",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            width: "80%",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: "20px",
            borderRadius: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>Créer un compte</h2>
          <div style={{ marginTop: "20px" }}>
            <div className="mb-3">
              <label htmlFor="nom" className="form-label">
                Nom
              </label>
              <input
                type="text"
                className="form-control"
                id="nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="prenom" className="form-label">
                Prénom
              </label>
              <input
                type="text"
                className="form-control"
                id="prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
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
              <label htmlFor="mdp" className="form-label">
                Mot de passe
              </label>
              <input
                type="password"
                className="form-control"
                id="mdp"
                value={mdp}
                onChange={(e) => setMdp(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-secondary">
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
