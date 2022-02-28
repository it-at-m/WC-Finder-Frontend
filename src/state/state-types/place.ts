import { LatLngExpression } from "leaflet";

export interface Place {
  id: string;
  title: string;
  short_description: string;
  position: LatLngExpression;
  photo?: string; //?: use to declare as optional.
  plan?: string;
  seeMoreLink?: string;
  address: string;
  eurokey?: string;
  ramp_steepness?: string;
  door_width?: string;
  zip_code?: string;
  city: string;
  grip?: string;
}
