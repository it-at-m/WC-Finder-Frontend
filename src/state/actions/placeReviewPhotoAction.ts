import { ActionTypePlaceReviewPhoto } from "../action-types/placeReviewPhotoType";
import { Images } from "../state-types/image";

interface PlaceReviewedPhotoSuccessAction {
    type: ActionTypePlaceReviewPhoto.PLACE_REVIEW_PHOTO_SUCCESS,
    payload: Images
}

interface PlaceReviewedPhotoNullAction {
    type: ActionTypePlaceReviewPhoto.PLACE_REVIEW_PHOTO_NULL
}

interface PlaceReviewedPhotoRequestAction {
    type: ActionTypePlaceReviewPhoto.PLACE_REVIEW_PHOTO_REQUEST
}

export type PlaceReviewPhotoAction = 
  |  PlaceReviewedPhotoSuccessAction
  |  PlaceReviewedPhotoNullAction
  |  PlaceReviewedPhotoRequestAction