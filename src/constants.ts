import L from "leaflet";
//import DoorWidthFunction from "./components/Filters/DoorWidth"

const toiletIcon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "images/toilet.svg",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const apiUri = "https://toilets-4v3wnsvvhq-lm.a.run.app/";

// var res = DoorWidthFunction
export { apiUri,toiletIcon };