import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../userContext/UserContext";

const Commands = () => {
  const [commands, setCommands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user } = useContext(UserContext);

  useEffect(() => {
    fetchCommands();
  }, []);

  const fetchCommands = async () => {
    try {
      const response = await axios.post(
        `https://api-dev.akov-developpement.fr/api/commande/${user.id}`
      );
      setCommands(response.data);
      setIsLoading(false);
    } catch (error) {
      setError("Error fetching commands");
      setIsLoading(false);
    }
  };
  console.log(commands);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Commands</h2>
      <p>My commands List</p>
      <div className="commands-list">
        {commands.length === 0 ? (
          <p>No commands found.</p>
        ) : (
          <ul className="list-group">
            {commands.map((commandData) => {
              const { commande, ligneCommandes } = commandData;
              return (
                <li key={commande.id} className="list-group-item mb-4">
                  <h5>Order ID: {commande.id}</h5>
                  <p>
                    <strong>Total Price:</strong> {commande.prix}€
                  </p>
                  <p>
                    <strong>Date:</strong>{" "}
                    {new Date(commande.dateAchat).toLocaleDateString()}
                  </p>
                  <div>
                    <h6>Order Items:</h6>
                    <ul>
                      {ligneCommandes.map((lineItem) => (
                        <li key={lineItem.id} className="mb-2">
                          <img
                            src={lineItem.produit.image}
                            alt={lineItem.produit.nom}
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                            }}
                          />
                          <p>
                            <strong>Product Name:</strong>{" "}
                            {lineItem.produit.nom}
                          </p>
                          <p>
                            <strong>Description:</strong>{" "}
                            {lineItem.produit.description}
                          </p>
                          <p>
                            <strong>Price per Unit:</strong>{" "}
                            {lineItem.produit.prix}€
                          </p>
                          <p>
                            <strong>Quantity:</strong> {lineItem.quantite}
                          </p>
                          <p>
                            <strong>Total:</strong>{" "}
                            {lineItem.produit.prix * lineItem.quantite}€
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Commands;
