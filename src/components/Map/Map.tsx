import React, { useEffect, useState } from "react";
import { LatLngExpression} from "leaflet";
import { MapContainer, TileLayer, Marker, Tooltip, useMapEvents, ZoomControl, useMap } from "react-leaflet";
import { connect } from "react-redux";
import { setPlacePreviewVisibility, setSelectedPlace } from "../../store/actions";
import { IState, Place } from "../../store/models";
import { OpenStreetMapProvider } from 'leaflet-geosearch';
// import * from "leaflet";

import { GeoSearchControl } from 'leaflet-geosearch';
import "./Map.css";
import "leaflet-geosearch/dist/geosearch.css";
import { toiletIcon } from "../../constants";
// import EuroKey from "../Filters/EuroKey/EuroKey";
// import DoorWidthFunction from "../Filters/DoorWidth/DoorWidth";
// import RampFunction from "../Filters/Ramp/Ramp";
// import MoreFilters from "../Filters/More Filters/MoreFilters"
import Filters from "../Filters/DoorWidth/DoorWidth"

var count = 0;
// onAdd: function (map) {
//   var container = latLng.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
// container.style.backgroundColor = 'white';
// container.style.width = '30px';
// container.style.height = '30px';
// container.onclick = function(){
// console.log('buttonClicked');
// }
// return container;
// }

const SearchControl = (props) => {
  const map = useMap()
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
  }, [map, props])
  return null;
}

const Map = ({
  isVisible,
  places,
  selectedPlace,
  togglePreview,
  setPlaceForPreview, 
}: any) => {
  const defaultPosition: LatLngExpression = [48.1351, 11.5820]; // Munich
  const [, setPolyLineProps] = useState([]);
  const prov = new OpenStreetMapProvider();
  
   useEffect(() => {
    setPolyLineProps(places.reduce((prev: LatLngExpression[], curr: Place) => {
      prev.push(curr.position);
      return prev;
    }, []))
  }, [places]);

  const showPreview = (place: Place) => {
    if (isVisible) {
      togglePreview(false);
      setPlaceForPreview(null);
    }

    if (selectedPlace?.title !== place.title) {
      setTimeout(() => {
        showPlace(place);
      }, 400);
    }
  };

  const showPlace = (place: Place) => {
    setPlaceForPreview(place);
    togglePreview(true);
  };

  function LocationMarker() {
    const [position, setPosition] = useState(
      (null as unknown) as LatLngExpression
    );
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })

    return position === null ? null : (
      <Marker position={position}>
        <Tooltip>You are here</Tooltip>
      </Marker>
    )
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
          searchLabel={"Enter address, please"}
          keepResult={true}
          // eslint-disable-next-line react/style-prop-object
          style={"bar"}
          popupFormat={( result: { label: any; }) => result.label}
        />
        <Filters />
        <ZoomControl position="bottomright" zoomInText="+" zoomOutText="-"/>
         {places.map((place: Place) => (
          <Marker
            key={place.title}
            position={place.position}
            eventHandlers={{ click: () => showPreview(place) }}
            icon={ toiletIcon }
          >
            <Tooltip>{place.title}</Tooltip>
          </Marker>
        ))}
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  const { places } = state;
  return {
    isVisible: places.placePreviewsIsVisible,
    places: places.places,
    selectedPlace: places.selectedPlace,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    togglePreview: (payload: boolean) =>
      dispatch(setPlacePreviewVisibility(payload)),
    setPlaceForPreview: (payload: Place) =>
      dispatch(setSelectedPlace(payload)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Map);
