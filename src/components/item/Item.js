import React from "react";

const Item = ({ character }) => {
  return (
    <li className="character-item">
      <img
        className="character-item__img"
        src={character.image}
        alt="img character"
      />
      <p className="character-item__name">{character.name}</p>
    </li>
  );
};

export default Item;
