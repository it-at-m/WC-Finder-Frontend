import "./App.css";

//import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
//import DetailView from "./components/DetailedView/DetailedView";
import Preview from "./components/Preview/Preview"
// import { useState } from "react";

const App=()=> {

  return (
    <>
      <nav>
        {/* <Header /> */}
      </nav>
      <main>
        <Map />
        <Preview />
      </main>
    </>
  );
}

export default App;
