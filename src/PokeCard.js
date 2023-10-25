import React from 'react';

const PokeCard = ({ name, id, type, base_experience }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="poke-card">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>Experience: {base_experience}</p>
    </div>
  );
};

export default PokeCard;
