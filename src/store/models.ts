import { LatLngExpression } from "leaflet";

export interface SearchState {
  searchIsVisible: boolean;
}

export interface PlaceState {
  places: Place[];
  selectedPlace: Place | null;
  placePreviewsIsVisible: boolean;
  placeFormIsVisible: boolean;
  prePlacePosition: LatLngExpression;
}

export interface IState {
  search: SearchState;
  places: PlaceState;
}

export interface Place {
  title: string;
  short_description: string;
  position: LatLngExpression;
  photo?: string;     //?: use to declare as optional.
  seeMoreLink?: string;
  eurokey?: string;
  ramp_steepness?: string;
  door_width?: string;
}
