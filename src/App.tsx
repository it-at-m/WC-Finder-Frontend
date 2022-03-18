import "./App.css";
import DetailedView from "./components/DetailedView/DetailedView";

//import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
// import Preview from "./components/Preview/Preview"
// import { useState } from "react";

const App=()=> {

  return (
    <>
      <nav>
        {/* <Header /> */}
      </nav>
      <main>
        <Map />
        {/* <Preview /> */}
        <DetailedView />
      </main>
    </>
  );
}

export default App;
