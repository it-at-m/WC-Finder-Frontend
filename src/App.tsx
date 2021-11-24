import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Preview from "./components/Preview/Preview";
import { connect } from "react-redux";
import { loadAllPlace } from "./store/actions";
import { Place } from "./store/models";
import { apiUri } from "./constants";
//import DoorWidthFunction  from "./components/Filters/DoorWidth"

const fetchData = async () => {
  const response = await fetch(`${apiUri}`);
  const data = await response.json();
    //console.log(data);
    return data
}

function App({loadAllPlaces}: any) {
  fetchData().then(data => {
    //console.log("Load all places data is - ",data)
    loadAllPlaces(data);
  })
  return (
    <>
      <nav>
        <Header />
      </nav>
      <main>
        {/* <Search /> */}
        <Map />
        <Preview />
      </main>
    </>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadAllPlaces: (payload: Place[]) =>
      dispatch(loadAllPlace(payload))
  };
};

export default connect(null, mapDispatchToProps)(App);
