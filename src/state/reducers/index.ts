import { combineReducers } from "redux";

import placesReducer from "./placesReducer";
import placeSelectedReducer from "./placeSelectedReducer";
import placeReviewReducer from "./placeReviewReducer";

const reducers = combineReducers({
  placesList: placesReducer,
  placeSelected: placeSelectedReducer,
  placeReviewed: placeReviewReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
