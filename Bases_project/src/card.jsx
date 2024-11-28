import React, { useState } from "react";
import "./card.css";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-container">
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        <div className="card-front">
          <h2>Frente</h2>
          <p>¡Hola! Esto es el frente de la tarjeta.</p>
        </div>
        <div className="card-back">
          <h2>Reverso</h2>
          <p>¡Hola! Esto es el reverso de la tarjeta.</p>
        </div>
      </div>
      <button onClick={handleFlip}>Girar Tarjeta</button>
    </div>
  );
};

export default Card;
