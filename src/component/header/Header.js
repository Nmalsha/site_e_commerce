import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../userContext/UserContext";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const [isUser, setIsUser] = useState("");
  const [isAdmin, setIsAdmin] = useState("");

  useEffect(() => {
    if (user && user.role === "ADMIN") {
      setIsAdmin(true);
    } else {
      setIsUser(true);
    }
  }, [user]);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUser(null);
    alert("Do you want to logout");
    navigate("/");
  };

  return (
    <header className="header">
      <nav
        className="navbar navbar-expand-lg navbar-light  custom-topbar"
        style={{ height: "150px" }}
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
                <Link
                  className="nav-link"
                  to="/"
                  style={{ color: "white", fontSize: "25px" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/products"
                  style={{ color: "white", fontSize: "25px" }}
                >
                  Produits
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                  style={{ color: "white", fontSize: "25px" }}
                >
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/client-space/login"
                  style={{ color: "white", fontSize: "25px" }}
                >
                  Espace Client
                </Link>
              </li>

              {isAdmin && (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/admin/products"
                    style={{ color: "white", fontSize: "25px" }}
                  >
                    Espace Admin
                  </Link>
                </li>
              )}
            </ul>
            {user && (
              <div
                style={{
                  display: "flex",
                }}
              >
                <span
                  style={{
                    color: "#460c91",
                    fontSize: "25px",
                    marginLeft: "25px",
                  }}
                >
                  {" "}
                  Hello {user.prenom}
                </span>
                {user.role !== "ADMIN" && (
                  <Link
                    style={{
                      color: "#white",
                      fontSize: "25px",
                      marginLeft: "25px",
                    }}
                    to="/profile"
                  >
                    {" "}
                    My Profile
                  </Link>
                )}
                {user && user.role !== "ADMIN" && (
                  <Link
                    className="nav-link"
                    to="/commandes"
                    style={{ color: "#460c91", fontSize: "25px" }}
                  >
                    Commandes
                  </Link>
                )}

                <span
                  style={{
                    color: "#white",
                    fontSize: "25px",
                    marginLeft: "25px",
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </span>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
