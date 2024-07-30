import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const UsersList = () => {
  const [listUsers, setListUsers] = useState([]);
  const [showAddProduct, setShowAddProduct] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.post(
        "https://api-dev.akov-developpement.fr/api/users/all"
      );
      setListUsers(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  return (
    <>
      <div>
        <div>
          <h2 className="mt-5">Users List</h2>
          <div className="mb-3"></div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>nom</th>
              <th>Prenom</th>
              <th>email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {listUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.nom}</td>
                <td>{user.prenom}</td>
                <td>{user.email}</td>

                <td>{user.role}</td>
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
export default UsersList;
