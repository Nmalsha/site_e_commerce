import React from "react";

const Contact = () => {
  return (
    <div
      className="container mt-5"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
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
          <h2 style={{ marginBottom: "20px" }}>Contactez nous</h2>
          <div style={{ marginTop: "20px" }}>
            <div className="mb-3">
              <label htmlFor="nom" className="form-label">
                Nom
              </label>
              <input type="text" className="form-control" id="nom" required />
            </div>
            <div className="mb-3">
              <label htmlFor="prenom" className="form-label">
                Prénom
              </label>
              <input
                type="text"
                className="form-control"
                id="prenom"
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
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tp" className="form-label">
                TP
              </label>
              <input type="number" className="form-control" id="tp" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <input
                type="text"
                className="form-control"
                id="message"
                required
              />
            </div>
            <button type="submit" className="btn btn-secondary">
              contect
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
