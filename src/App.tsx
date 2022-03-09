import "./App.css";

import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import DetailView from "./components/DetailedView/DetailedView";

const App=()=> {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <main>
        <Map />
        {/* <Preview /> */}
        <DetailView />
      </main>
    </>
  );
}

export default App;
