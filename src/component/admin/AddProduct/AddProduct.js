import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    nom: "",
    description: "",
    prix: "",
    image: "",
    tail: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      console.log("Request Payload:", product);

      const response = await axios.post(
        "https://api-dev.akov-developpement.fr/api/produit/save",
        product
      );
      console.log(response.data);
      setProduct({
        nom: "",
        description: "",
        prix: "",
        image: "",
        tail: "",
      });
      alert("Product added successfully");
      navigate("/admin/products");
      setSuccessMessage("Product added successfully");
    } catch (error) {
      console.error("Error adding product:", error);
      setError("Failed to add product");
    }
  };

  return (
    <div
      className="container mt-5"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
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
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "70%",
            backgroundColor: "#5b4b61",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: "20px",
          }}
        >
          <h2>Add a New Product</h2>
          <div
            style={{
              padding: "50px",
            }}
          >
            <div className="mb-3">
              <label htmlFor="nom" className="form-label">
                Nom
              </label>
              <input
                type="text"
                className="form-control"
                id="nom"
                name="nom"
                value={product.nom}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={product.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="prix" className="form-label">
                Prix
              </label>
              <input
                type="number"
                className="form-control"
                id="prix"
                name="prix"
                value={product.prix}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image URL
              </label>
              <input
                type="text"
                className="form-control"
                id="image"
                name="image"
                value={product.image}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tail" className="form-label">
                Taille
              </label>
              <input
                type="number"
                className="form-control"
                id="tail"
                name="tail"
                value={product.tail}
                onChange={handleChange}
                required
              />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
