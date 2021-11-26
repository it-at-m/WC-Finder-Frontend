import { ActionTypePlacesList } from "../action-types/placesListTypes";
import { Place } from "../state-types/place";

interface PlacesListRequestAction {
  type: ActionTypePlacesList.PLACES_LIST_REQUEST;
}
interface PlacesListSuccessAction {
  type: ActionTypePlacesList.PLACES_LIST_SUCCESS;
  payload: Place[];
}
interface PlacesListFailAction {
  type: ActionTypePlacesList.PLACES_LIST_FAIL;
  payload: string;
}

interface PlacesListFilterRequestAction {
  type: ActionTypePlacesList.PLACES_LIST_FILTER_REQUEST;
}

interface PlacesListFilterSuccessAction {
  type: ActionTypePlacesList.PLACES_LIST_FILTER_SUCCESS;
  payload: Place[];
}
interface PlacesListFilterFailAction {
  type: ActionTypePlacesList.PLACES_LIST_FILTER_FAIL;
  payload: string;
}
export type PlacesListAction =
  | PlacesListRequestAction
  | PlacesListSuccessAction
  | PlacesListFailAction
  | PlacesListFilterRequestAction
  | PlacesListFilterSuccessAction
  | PlacesListFilterFailAction;
