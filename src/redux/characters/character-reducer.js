import { characterActionTypes } from "./action-types";

const initialState = {
  info: {},
  characters: [],
};

export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case characterActionTypes.load:
      return {
        ...state,
        characters: [...action.payload.results],
        info: { ...action.payload.info },
      };

    default:
      return state;
  }
};
