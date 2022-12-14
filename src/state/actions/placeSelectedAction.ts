import { ActionTypePlaceSelected } from "../action-types/placeSelectedType";
import { Place } from "../state-types/place";

interface PlaceSelectedRequestAction {
  type: ActionTypePlaceSelected.PLACE_SELECTED_REQUEST;
}
interface PlaceSelectedSuccessAction {
  type: ActionTypePlaceSelected.PLACE_SELECTED_SUCCESS;
  payload: Place;
}
interface PlaceSelectedFailAction {
  type: ActionTypePlaceSelected.PLACE_SELECTED_FAIL;
  payload: string;
}

interface PlaceSelectedNullAction {
  type: ActionTypePlaceSelected.PLACE_SELECTED_NULL;
}

interface PlaceSelectedChangeAction {
  type: ActionTypePlaceSelected.PLACE_SELECTED_CHANGED;
}

export type PlaceSelectedAction =
  | PlaceSelectedRequestAction
  | PlaceSelectedSuccessAction
  | PlaceSelectedChangeAction
  | PlaceSelectedFailAction
  | PlaceSelectedNullAction;
