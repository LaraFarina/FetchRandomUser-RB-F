import React from "react";

const Modal = ({ user, onClose }) => {
  return (
    <div className="user-modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <img className="user-avatar" src={user.picture.large} alt={user.name.first} />
        <h2>{user.name.first} {user.name.last}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Edad:</strong> {user.dob.age}</p>
        <p><strong>Ubicación:</strong> {`${user.location.city}, ${user.location.country}`}</p>
        <p><strong>Fecha de Cumpleaños:</strong> {new Date(user.dob.date).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Modal;
