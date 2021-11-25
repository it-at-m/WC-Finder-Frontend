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
import { toiletIcon } from "../../constants";
import Filter from "../Filters/DoorWidth";
import { useActions } from "../../hooks/useActions";
import { Place } from "../../state/state-types/place";
import { useSelector } from "../../hooks/useTypedSelector";

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
  const [, setPolyLineProps] = useState([]);
  const prov = new OpenStreetMapProvider();
  const { listPlaces, selectPlace } = useActions();
  const {
    data: places
  } = useSelector((state) => state.placesList);

  useEffect(() => {
    const fetchData = async () => {
      await listPlaces();
    };

    fetchData();
  }, []);

  useEffect(() => {
    setPolyLineProps(
      places.reduce((prev: any, curr) => {
        prev.push(curr.position);
        return prev;
      }, [])
    );
  }, []);

  function LocationMarker() {
    const [position, setPosition] = useState(
      null as unknown as LatLngExpression
    );
    const map = useMapEvents({
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });
    function handleSubmit(e: { preventDefault: () => void }) {
      map.locate();
      e.preventDefault();
      // alert('You clicked submit.');
    }

    return position === null ? (
      <form onSubmit={handleSubmit}>
        <div className="leaflet-top leaflet-right relocation_div">
          <div className="leaflet-control">
            <button className="relocation_button" type="submit"></button>
          </div>
        </div>
      </form>
    ) : (
      <>
        <form onSubmit={handleSubmit}>
          <div className="leaflet-top leaflet-right relocation_div">
            <div className="leaflet-control">
              <button className="relocation_button" type="submit"></button>
            </div>
          </div>
        </form>
        <Marker position={position}>
          <Tooltip>You are here</Tooltip>
        </Marker>
      </>
    );
  }

  return (
    <div className="map__container">
      <MapContainer
        center={defaultPosition}
        zoom={16}
        scrollWheelZoom={true}
        style={{ height: "95vh" }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SearchControl
          provider={prov}
          showMarker={true}
          showPopup={false}
          maxMarkers={15}
          retainZoomLevel={true}
          animateZoom={true}
          autoClose={false}
          searchLabel={"Where are you going?"}
          keepResult={true}
          // eslint-disable-next-line react/style-prop-object
          style={"bar"}
          popupFormat={(result: { label: any }) => result.label}
        />
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
};


export default Map;