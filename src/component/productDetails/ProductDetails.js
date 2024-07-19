import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../userContext/UserContext";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const fetchProduct = async () => {
    try {
      const response = await axios.post(
        `https://api-dev.akov-developpement.fr/api/produit/${productId}`
      );
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const { user } = useContext(UserContext);

  const handleBuyNow = async () => {
    try {
      const response = await axios.post(
        "https://api-dev.akov-developpement.fr/api/commande/save",
        {
          idUser: user.id,
          idProduit: product.id,
          qte: 1,
        }
      );
      console.log(response.data);
      alert("Order placed successfully!");
      navigate("/commandes");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Error placing order. Please try again.");
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <button onClick={goBack} className="go-back-button">
        &lt;
      </button>
      <h2>Product Details</h2>
      <div className="product-details">
        <img
          className="product-image"
          src={product.image}
          alt={product.nom}
          style={{ height: "300px" }}
        />
        <div className="product-info">
          <h3>{product.nom}</h3>
          <p>{product.description}</p>
          <p>
            <strong>Prix: </strong> {product.prix}€
          </p>
          <p>
            <strong>Taille: </strong> {product.tail}
          </p>
          <Button variant="primary" onClick={handleBuyNow}>
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
