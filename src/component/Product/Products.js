import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import defaultImage from "../../images/avatar.jpg";
import "./Products.css";

const Products = () => {
  const [listProducts, setListProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  useEffect(() => {
    setProducts(listProducts);
  }, [listProducts]);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else if (sortOrder === "desc") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.post(
        "https://api-dev.akov-developpement.fr/api/produit/all"
      );
      setListProducts(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const renderCardImage = (image) => {
    return image ? image : defaultImage;
  };

  useEffect(() => {
    const filtered = listProducts.filter((product) => {
      return (
        product.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.prix.toString().includes(searchTerm)
      );
    });
    setProducts(filtered);
  }, [searchTerm, listProducts]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
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
      <h2>Our List of products</h2>
      <Form.Control
        type="text"
        placeholder="Search by name, description, price, or size"
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-3"
      />
      <Form.Control
        as="select"
        onChange={handleSortChange}
        value={sortOrder}
        className="mb-3"
      >
        <option value="">Sort by</option>
        <option value="asc">Prix croissant</option>
        <option value="desc">Prix décroissant</option>
      </Form.Control>

      <Row xs={1} md={3} className="g-4">
        {sortedProducts.map((product, index) => (
          <Col key={product.id}>
            <Card
              className="card_styles"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <Card.Img
                variant="top"
                className="img_heigt"
                src={renderCardImage(product.image)}
              />
              <Card.Body>
                <Card.Title>{product.nom}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>
                  <strong>Prix: </strong> {product.prix}€
                </Card.Text>
                <Card.Text>
                  <strong>Taille: </strong> {product.tail}
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
