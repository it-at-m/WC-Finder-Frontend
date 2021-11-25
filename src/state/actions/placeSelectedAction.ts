import { ActionTypePlaceSelected } from "../action-types/placeSelectedType";
import { Place } from "../state-types/place";

interface PlaceSelctedRequestAction {
  type: ActionTypePlaceSelected.PLACE_SELECTED_REQUEST;
}
interface PlaceSelctedSuccessAction {
  type: ActionTypePlaceSelected.PLACE_SELECTED_SUCCESS;
  payload: Place;
}
interface PlaceSelctedFailAction {
  type: ActionTypePlaceSelected.PLACE_SELECTED_FAIL;
  payload: string;
}

interface PlaceSelctedNullAction {
  type: ActionTypePlaceSelected.PLACE_SELECTED_NULL;
}

export type PlaceSelectedAction =
  | PlaceSelctedRequestAction
  | PlaceSelctedSuccessAction
  | PlaceSelctedFailAction
  | PlaceSelctedNullAction;
