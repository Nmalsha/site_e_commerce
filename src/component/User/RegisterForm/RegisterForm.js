import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://192.168.144.7:8081/api/users/save",
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
    } catch (error) {
      console.error("Error during registration:", error);
      setError("Error registering user. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Créer un compte</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}
      <form
        onSubmit={handleSubmit}
        style={{ width: "40%", display: "inline-block" }}
      >
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
        <button type="submit" className="btn btn-primary">
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
