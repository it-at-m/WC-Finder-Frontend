import "./App.css";
import DetailedView from "./components/DetailedView/DetailedView";

//import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
// import Preview from "./components/Preview/Preview"
// import { useState } from "react";
// import ReactGa from 'react-ga';
// import { useEffect } from "react";


const App=()=> {
  
  // useEffect(()=>{
  //   ReactGa.initialize('UA-223747245-1')

  //   // to report page view
  //   ReactGa.pageview('/')
  // },[])

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
