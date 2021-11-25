//import React, { useEffect } from "react";
import "./App.css";

import Header from "./components/Header/Header";
// import Preview from "./components/Preview/Preview";
//import { connect } from "react-redux";
//import { apiUri } from "./constants";
//import { useActions } from "./hooks/useActions";
//import { useSelector } from "./hooks/useTypedSelector";
import Map from "./components/Map/Map";
import Preview from "./components/Preview/Preview";
//import DoorWidthFunction  from "./components/Filters/DoorWidth"

function App() {
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

export default App;
