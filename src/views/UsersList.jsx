import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import Modal from "./Modal";

const UsersList = () => {
  const urlApi = "https://randomuser.me/api/?results=5";
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.log("Hubo un error " + error));
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="user-list-container">
      <h1 className="list-title">Listado:</h1>
      <div className="user-cards">
        {users.map((user, index) => (
          <Cards key={index} user={user} onClick={handleUserClick} />
        ))}
      </div>
      {selectedUser && (
        <Modal user={selectedUser} onClose={handleCloseModal} />
      )}
    </div>
  );  
};

export default UsersList;
