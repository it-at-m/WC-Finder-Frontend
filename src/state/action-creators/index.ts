import { Dispatch } from "redux";

import axios from "axios";
import { PlacesListAction } from "../actions/placesListAction";
import { ActionTypePlacesList } from "../action-types/placesListTypes";
import { Place } from "../state-types/place";
import { apiUri,filterApi,ReviewApi } from "../../constants";
import { PlaceSelectedAction } from "../actions/placeSelectedAction";
import { RootState } from "..";
import { ActionTypePlaceSelected } from "../action-types/placeSelectedType";
import { ActionTypePlaceReview } from "../action-types/placeReviewType";
import { PlaceReviewAction } from "../actions/placeReviewAction";
import { Review } from "../state-types/review";

// list places
export const listPlaces = () => {
  const instance = axios.create({
    // withCredentials: true,
  });
  return async (dispatch: Dispatch<PlacesListAction>) => {
    dispatch({
      type: ActionTypePlacesList.PLACES_LIST_REQUEST,
    });

    try {
      const { data }: any = await instance.get(apiUri);

      const places: Place[] = data;
      dispatch({
        type: ActionTypePlacesList.PLACES_LIST_SUCCESS,
        payload: places,
      });
    } catch (err: any) {
      console.log("error");
      dispatch({
        type: ActionTypePlacesList.PLACES_LIST_FAIL,
        payload: err.message,
      });
    }
  };
};

// listPlacesFilter places
export const listPlacesFilter = (dataInput) => {
  const instance = axios.create({
    // withCredentials: true,
  });
  return async (dispatch: Dispatch<PlacesListAction>) => {
    dispatch({
      type: ActionTypePlacesList.PLACES_LIST_FILTER_REQUEST,
    });

    try {
      const { data }: any = await instance.post(
        filterApi,
        dataInput
      );
      const places: Place[] = data;
      dispatch({
        type: ActionTypePlacesList.PLACES_LIST_FILTER_SUCCESS,
        payload: places,
      });
    } catch (err: any) {
      console.log("error");
      dispatch({
        type: ActionTypePlacesList.PLACES_LIST_FILTER_FAIL,
        payload: err.message,
      });
    }
  };
};

// select place
export const selectPlace = (placeId: string) => {
  return async (
    dispatch: Dispatch<PlaceSelectedAction>,
    getState: () => RootState
  ) => {
    dispatch({
      type: ActionTypePlaceSelected.PLACE_SELECTED_REQUEST,
    });

    try {
      const data = await getState().placesList.data.find(
        (place) => place.id === placeId
      );
      dispatch({
        type: ActionTypePlaceSelected.PLACE_SELECTED_SUCCESS,
        payload: data!,
      });
    } catch (err: any) {
      dispatch({
        type: ActionTypePlaceSelected.PLACE_SELECTED_FAIL,
        payload: err.message,
      });
    }
  };
};

// not select place
export const nullSelectPlace = () => {
  return async (dispatch: Dispatch<PlaceSelectedAction>) => {
    return dispatch({
      type: ActionTypePlaceSelected.PLACE_SELECTED_NULL,
    });
  };
};

// // Save Review
export const ReviewPlace = (dataInput) => {
  const instance = axios.create({
    // withCredentials: true,
  });
  return async (
    dispatch: Dispatch<PlaceReviewAction>,
    getState: () => RootState) => {
    // dispatch({
    //   type: ActionTypePlaceReview.PLACE_REVIEW_REQUEST,
    //   payload: dataInput,
    // });
    dispatch({
      type: ActionTypePlaceReview.PLACE_REVIEW_REQUEST
    });

    try {
      const { data }: any = await instance.post(
        ReviewApi,
        dataInput
      );
      const review: Review = data;
      dispatch({
        type: ActionTypePlaceReview.PLACE_REVIEW_SUCCESS,
        payload:review,
        body: JSON.stringify({
          review
        }),
      });
    } catch (err: any) {
      console.log("error");
      dispatch({
        type: ActionTypePlaceReview.PLACE_REVIEW_NULL,
        payload: null,
      });
    }
  };
};