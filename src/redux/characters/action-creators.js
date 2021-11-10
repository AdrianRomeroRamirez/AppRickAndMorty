import * as http from "../../service/httpRickAndMorty";
import { characterActionTypes } from "./action-types";

export const loadFirstCharacters = () => {
  return (dispatch) => {
    http.getCharacterInfo().then((resp) => {
      dispatch({
        type: characterActionTypes.load,
        payload: resp,
      });
    });
  };
};
