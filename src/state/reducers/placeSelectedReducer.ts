import { PlaceSelectedAction } from "../actions/placeSelectedAction";
import { ActionTypePlaceSelected } from "../action-types/placeSelectedType";
import { Place } from "../state-types/place";
// import { State, initialState } from "../stateType";
interface PlaceSelectedState {
  loading: boolean;
  error: string | null;
  data: Place | null;
  toggle: number | null;
}
const initialState = {
  loading: false,
  error: null,
  data: null,
  toggle: 1
};

const reducer = (
  state: PlaceSelectedState = initialState,
  action: PlaceSelectedAction
): PlaceSelectedState => {
  switch (action.type) {
    case ActionTypePlaceSelected.PLACE_SELECTED_REQUEST:
      return { loading: true, error: null, data: null, toggle: null };
    case ActionTypePlaceSelected.PLACE_SELECTED_SUCCESS:
      return { loading: false, error: null, data: action.payload, toggle:1 };

    case ActionTypePlaceSelected.PLACE_SELECTED_FAIL:
      return { loading: false, error: action.payload, data: null, toggle:null };

    case ActionTypePlaceSelected.PLACE_SELECTED_NULL:
      return { loading: false, error: null, data: null, toggle: null };
    
    case ActionTypePlaceSelected.PLACE_SELECTED_CHANGED:
      return { loading: true, error:null, data:null, toggle: 1};
    default:
      return state;
  }
};

export default reducer;
