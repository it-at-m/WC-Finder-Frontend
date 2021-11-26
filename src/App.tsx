import "./App.css";

import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Preview from "./components/Preview/Preview";

function App() {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <main>
        <Map />
        <Preview />
      </main>
    </>
  );
}

export default App;
