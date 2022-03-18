import L from "leaflet";

const toiletIcon = L.icon({
  iconSize: [32, 33.97],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "images/toilet.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});


const apiUri = "https://toilets-4v3wnsvvhq-lm.a.run.app/";

const trackerIcon = L.icon({
  iconSize: [32, 33.97],
  iconUrl: "images/tracker_icon.png",
});

const filterApi = apiUri + "filter/";
const ReviewApi = "34.141.65.61:5000/review/";
export { apiUri, toiletIcon, trackerIcon,filterApi,ReviewApi };
