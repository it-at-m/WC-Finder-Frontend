import { ActionTypePlaceReview } from "../action-types/placeReviewType";
import { Review } from "../state-types/review";

interface PlaceReviewedSuccessAction {
    type: ActionTypePlaceReview.PLACE_REVIEW_SUCCESS,
    payload: Review
}

interface PlaceReviewedNullAction {
    type: ActionTypePlaceReview.PLACE_REVIEW_NULL
}

interface PlaceReviewedRequestAction {
    type: ActionTypePlaceReview.PLACE_REVIEW_REQUEST
}

export type PlaceReviewAction = 
  |  PlaceReviewedSuccessAction
  |  PlaceReviewedNullAction
  |  PlaceReviewedRequestAction