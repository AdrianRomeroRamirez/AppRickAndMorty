import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { characterReducer } from "../redux/characters/character-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    characterStore: characterReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
