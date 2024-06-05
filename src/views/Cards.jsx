import React from "react";

const Card = ({ user, onClick }) => {
  return (
    <div className="user-card" onClick={() => onClick(user)}>
      <img className="user-avatar" src={user.picture.medium} alt={user.name.first} />
      <div className="user-details">
        <h3>{user.name.first} {user.name.last}</h3>
        <p><strong>País:</strong> {user.location.country}</p>
      </div>
    </div>
  );
};

export default Card;
