import L from "leaflet";

const toiletIcon = L.icon({
  iconSize: [25, 35],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "images/toilet.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});


const apiUri = "https://toilets-4v3wnsvvhq-ew.a.run.app/";

const trackerIcon = L.icon({
  iconUrl: "images/tracker_icon.png",
});

const filterApi = apiUri + "filter/";;
export { apiUri, toiletIcon, trackerIcon,filterApi };
