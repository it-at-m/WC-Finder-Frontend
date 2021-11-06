import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Search from "./components/Search/Search";
import Preview from "./components/Preview/Preview";
import { connect } from "react-redux";
import { loadAllPlace } from "./store/actions";
import { Place } from "./store/models";

const fetchData = async () => {
  const res = await fetch("http://localhost:5000/address")
  const json = await res.json()
  return json
}

function App({loadAllPlaces}: any) {
  fetchData().then(data => {
    loadAllPlaces(data);
  })
  return (
    <>
      <nav>
        <Header />
      </nav>
      <main>
        <Search />
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