import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../redux/characters/action-creators";
import Item from "../item/Item";
import "./List.css";

const List = () => {
  const { characters } = useSelector((state) => state.characterStore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.loadCharacters());
  }, [dispatch]);

  const templateListCharacter = characters.map((character) => {
    return <Item key={character.id} character={character} />;
  });

  return <ul className="character-list">{templateListCharacter}</ul>;
};

export default List;
