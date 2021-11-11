import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../redux/characters/action-creators";
import "./Button.css";

const Button = () => {
  const { info } = useSelector((state) => state.characterStore);
  const dispatch = useDispatch();

  const nextPage = () => {
    dispatch(action.loadCharacters(info.next));
  };

  const prevPage = () => {
    dispatch(action.loadCharacters(info.prev));
  };

  const buttonPrev = info.prev ? (
    <button type="button" onClick={prevPage}>
      prev
    </button>
  ) : (
    ""
  );
  const buttonNext = info.next ? (
    <button type="button" onClick={nextPage}>
      next
    </button>
  ) : (
    ""
  );

  return (
    <div className="buttons-pagination">
      {buttonPrev}
      {buttonNext}
    </div>
  );
};

export default Button;
