import L from "leaflet";

const toiletIcon = L.icon({
  iconSize: [33.5,34.97],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "images/toilet_icon.svg",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});


const apiUri = "https://backend.inclus.de/";

const trackerIcon = L.icon({
  iconSize: [48, 48],
  iconUrl: "images/tracker_icon.svg",
});

const filterApi = apiUri + "filter/";
const ReviewApi = apiUri + "review";
const PhotoApi = apiUri + "loadphoto";

const GA_TRACKING_CODE = 'UA-223747245-1';
export { apiUri, toiletIcon, trackerIcon,filterApi,ReviewApi,GA_TRACKING_CODE, PhotoApi };
