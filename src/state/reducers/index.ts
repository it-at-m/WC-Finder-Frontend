import { combineReducers } from "redux";

import placesReducer from "./placesReducer";
import placeSelectedReducer from "./placeSelectedReducer";

const reducers = combineReducers({
  placesList: placesReducer,
  placeSelected: placeSelectedReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
