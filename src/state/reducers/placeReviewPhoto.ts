import { Images } from "../state-types/image";
import { PlaceReviewPhotoAction } from "../actions/placeReviewPhotoAction";
import { ActionTypePlaceReviewPhoto } from "../action-types/placeReviewPhotoType";

interface ImageState {
    loading: boolean;
    error: string | null;
    data: Images | null;
}
const initialState = {
    loading: false,
    error: null,
    data: null
}

const reducer = (
    state: ImageState = initialState,
    action: PlaceReviewPhotoAction 
): ImageState => {
    switch(action.type){
        case ActionTypePlaceReviewPhoto.PLACE_REVIEW_PHOTO_REQUEST:
            return {loading:false, error:null, data:null};
        case ActionTypePlaceReviewPhoto.PLACE_REVIEW_PHOTO_SUCCESS:
            return {loading:true, error:null, data:action.payload};
        case ActionTypePlaceReviewPhoto.PLACE_REVIEW_PHOTO_NULL:
            return { loading:false, error:null, data: null };

        default:
            return state;
    }
}

export default reducer;