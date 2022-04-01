import { PlaceSelectedAction } from "../actions/placeSelectedAction";
import { ActionTypePlaceSelected } from "../action-types/placeSelectedType";
import { Place } from "../state-types/place";
// import { State, initialState } from "../stateType";
interface PlaceSelectedState {
  loading: boolean;
  error: string | null;
  data: Place | null;
}
const initialState = {
  loading: false,
  error: null,
  data: null,
};

const reducer = (
  state: PlaceSelectedState = initialState,
  action: PlaceSelectedAction
): PlaceSelectedState => {
  switch (action.type) {
    case ActionTypePlaceSelected.PLACE_SELECTED_REQUEST:
      return { loading: true, error: null, data: null };
    case ActionTypePlaceSelected.PLACE_SELECTED_SUCCESS:
      return { loading: false, error: null, data: action.payload };

    case ActionTypePlaceSelected.PLACE_SELECTED_FAIL:
      return { loading: false, error: action.payload, data: null };

    case ActionTypePlaceSelected.PLACE_SELECTED_NULL:
      return { loading: false, error: null, data: null };
    
    case ActionTypePlaceSelected.PLACE_SELECTED_CHANGED:
      return { loading: true, error:null, data:null};
    default:
      return state;
  }
};

export default reducer;
