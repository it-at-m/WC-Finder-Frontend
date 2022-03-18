import { Review } from "../state-types/review";
import { PlaceReviewAction } from "../actions/placeReviewAction";
import { ActionTypePlaceReview } from "../action-types/placeReviewType";

interface ReviewState {
    loading: boolean;
    error: string | null;
    data: Review | null;
}
const initialState = {
    loading: false,
    error: null,
    data: null
}

const reducer = (
    state: ReviewState = initialState,
    action: PlaceReviewAction 
): ReviewState => {
    switch(action.type){
        case ActionTypePlaceReview.PLACE_REVIEW_SUCCESS:
            return {loading:true, error:null, data:action.payload};
        case ActionTypePlaceReview.PLACE_REVIEW_NULL:
            return { loading:false, error:null, data: null };

        default:
            return state;
    }
}

export default reducer;