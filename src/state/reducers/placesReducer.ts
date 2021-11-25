import { PlacesListAction } from "../actions/placesListAction";
import { ActionTypePlacesList } from "../action-types/placesListTypes";
import { Place } from "../state-types/place";
// import { State, defaultState } from "../stateType";
interface PlaceState {
  loading: boolean;
  error: string | null;
  data: Place[];
}
const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: PlaceState = initialState,
  action: PlacesListAction
): PlaceState => {
  switch (action.type) {
    case ActionTypePlacesList.PLACES_LIST_REQUEST: {
      return { loading: true, error: null, data: [] };
    }
    case ActionTypePlacesList.PLACES_LIST_SUCCESS: {
      return { loading: false, error: null, data: action.payload };
    }

    case ActionTypePlacesList.PLACES_LIST_FAIL: {
      return { loading: false, error: action.payload, data: [] };
    }

    case ActionTypePlacesList.PLACES_LIST_FILTER_REQUEST: {
      return { loading: true, error: null, data: [] };
    }
    case ActionTypePlacesList.PLACES_LIST_FILTER_SUCCESS: {
      return { loading: false, error: null, data: action.payload };
    }

    case ActionTypePlacesList.PLACES_LIST_FILTER_FAIL: {
      return { loading: false, error: action.payload, data: [] };
    }

    default:
      return state;
  }
};

export default reducer;
