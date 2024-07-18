import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const fetchProduct = async () => {
    try {
      const response = await axios.post(
        `https://api-dev.akov-developpement.fr/api/produit/${productId}`
      );
      setProduct(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
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
          <Button variant="primary">Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
