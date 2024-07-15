import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [mdp, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://192.168.144.7:8081/api/users/login",
        {
          email,
          mdp,
        }
      );

      const userData = response.data;
      localStorage.setItem("userData", JSON.stringify(userData));

      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: "40%", display: "inline-block" }}
    >
      <h2>Identification</h2>
      <div className="mb-3">
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
      <button type="submit" className="btn btn-primary">
        Se connecter
      </button>
    </form>
  );
};

export default LoginForm;
