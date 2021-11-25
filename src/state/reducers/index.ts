import { combineReducers } from "redux";

import placesReducer from "./placesReducer";
import placeSelctedReducer from "./placeSelctedReducer";

const reducers = combineReducers({
  placesList: placesReducer,
  placeSelected: placeSelctedReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
