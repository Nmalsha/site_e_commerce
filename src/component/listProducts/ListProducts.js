import React, { useState, useEffect } from "react";
import axios from "axios";

const ListProducts = () => {
  const [listProducts, setListProducts] = useState([]);
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
        <h2 className="mt-5">Products List</h2>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ListProducts;
