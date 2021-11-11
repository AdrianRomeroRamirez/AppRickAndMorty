import * as http from "../../service/httpRickAndMorty";
import { characterActionTypes } from "./action-types";

export const loadCharacters = (url) => {
  return (dispatch) => {
    http.getCharacterInfo(url).then((resp) => {
      dispatch({
        type: characterActionTypes.load,
        payload: resp,
      });
    });
  };
};
