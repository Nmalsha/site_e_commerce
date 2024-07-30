import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import AddProduct from "../AddProduct/AddProduct";
import axios from "axios";

const ProductList = () => {
  const [listProducts, setListProducts] = useState([]);
  const [showAddProduct, setShowAddProduct] = useState(false);

  const toggleAddProduct = () => {
    setShowAddProduct(!showAddProduct);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.post(
        "https://api-dev.akov-developpement.fr/api/produit/all"
      );
      setListProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  return (
    <>
      <div>
        <div>
          <h2 className="mt-5">Products List</h2>
          <div className="mb-3">
            <Button
              variant="primary"
              onClick={toggleAddProduct}
              style={{ marginBottom: "10px" }}
            >
              Add Product
            </Button>
            {showAddProduct && <AddProduct />}
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Description</th>
              <th>Prix</th>
              <th>Image</th>
              <th>Taille</th>
            </tr>
          </thead>
          <tbody>
            {listProducts.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.nom}</td>
                <td>{prod.description}</td>
                <td>{prod.prix}</td>
                <td>
                  <img
                    src={prod.image}
                    alt={prod.nom}
                    style={{ width: "50px" }}
                  />
                </td>
                <td>{prod.tail}</td>
                <td>
                  <Button variant="primary" className="me-2">
                    Edit
                  </Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ProductList;
