import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ character }) => {
  const route = `/details/${character.id}`;

  return (
    <Link className="character-link" to={route}>
      <li className="character-item">
        <img
          className="character-item__img"
          src={character.image}
          alt="img character"
        />
        <p className="character-item__name">{character.name}</p>
      </li>
    </Link>
  );
};

export default Item;
