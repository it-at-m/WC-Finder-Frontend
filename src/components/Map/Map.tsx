import { useEffect, useState } from "react";
import { LatLngExpression } from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  useMapEvents,
  ZoomControl,
  useMap,
} from "react-leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { GeoSearchControl } from "leaflet-geosearch";
import "leaflet-geosearch/dist/geosearch.css";
import "./Map.css";
import { toiletIcon,trackerIcon } from "../../constants";
import Filter from "../Filters/Filter";
import { useActions } from "../../hooks/useActions";
import { Place } from "../../state/state-types/place";
import { useSelector } from "../../hooks/useTypedSelector";
import { useTranslation } from "react-i18next";
import Language from "../Language/Language";
// import ReactGA from 'react-ga';
var count = 0;

const SearchControl = (props) => {
  const map = useMap();
  useEffect(() => {
    const searchControl = GeoSearchControl({
      provider: props.provider,
      ...props,
    });
    // TODO: Find another way to remove this logic
    if (count === 0) {
      map.addControl(searchControl);
      count++;
    }
  }, [map, props]);
  return null;
};

const Map = () => {
  const defaultPosition: LatLngExpression = [48.1351, 11.582]; // Munich
  const prov = new OpenStreetMapProvider();
  const { listPlaces, selectPlace } = useActions();
  const {
    data: places
  } = useSelector((state) => state.placesList);

  useEffect(() => {
    const fetchData = async () => {
      listPlaces();
    };
    
    fetchData();
    // eslint-disable-next-line
  }, []);
  
  function LocationMarker() {
    const [position, setPosition] = useState(
      null as unknown as LatLngExpression
    );
    const map = useMapEvents({
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      }
    });
    function handleSubmit(e: { preventDefault: () => void }) {
      map.locate();
      e.preventDefault();
      // alert('You clicked submit.');
    }
    const {t}=useTranslation();
    return position === null ? (
      <form onSubmit={handleSubmit}>
        <div className="leaflet-bottom leaflet-right relocation_div">
          <div className="leaflet-control">
            <button className="relocation_button" type="submit"></button>
          </div>
        </div>
      </form>
    ) : (
      <>
        <form onSubmit={handleSubmit}>
          <div className="leaflet-bottom leaflet-right relocation_div">
            <div className="leaflet-control">
              <button className="relocation_button" type="submit"></button>
            </div>
          </div>
        </form>
        <Marker 
        position={position}
        icon={trackerIcon}>
          <Tooltip>{t("You are here")}</Tooltip>
        </Marker>
      </>
    );
  }

  //Tracking
  // ReactGA.initialize('UA-223747245-1');
  // ReactGA.pageview('/');
    //For translation
  const {t} = useTranslation();
  return (
    <div className="map__container">
       <MapContainer
        center={defaultPosition}
        zoom={16}
        scrollWheelZoom={true}
        style={{ height: "100vh" }}
        zoomControl={false}
      >
        <TileLayer
          attribution='© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieWFzaGFzd2lwIiwiYSI6ImNsMGkwYTFuaDA5MTAzZG1xYWdmZTF6eTkifQ.bc26l7KO7dCtYduYXQBCJA"
          tileSize={512}
          zoomOffset={-1}
        />
          <SearchControl
          provider={prov}
          showMarker={true}
          showPopup={false}
          maxMarkers={15}
          retainZoomLevel={true}
          animateZoom={true}
          autoClose={false}
          keepResult={true}
          searchLabel= {t("Where  are you going?")}
          // eslint-disable-next-line react/style-prop-object
          style={"bar"}
          popupFormat={(result: { label: any }) => result.label}
          />
        <Language />
        <Filter />
        <ZoomControl position="bottomright" zoomInText="+" zoomOutText="-" />
        {places &&
          places.map((place: Place) => (
            <Marker    
              key={place.title}
              position={place.position}
              eventHandlers={{ click: () => selectPlace(place.id) }}
              icon={toiletIcon}
            >
              <Tooltip>{place.title}</Tooltip>
            </Marker>
          ))}
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default Map;