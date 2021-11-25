//import { connect } from "react-redux";

import "./Header.css";
//import { CgSearch} from "react-icons/cg";

const Header = () => {
  return (
    <div className="header__container">
       {/* <CgSearch
        style={{
          fontSize: "3rem",
          verticalAlign: "middle",
          position: "absolute",
          left: "1rem",
          top: "10px",
        }}
        onClick={() => setSearchVisibility(!searchIsVisible)}
      ></CgSearch> */}
      <span>
        inclus
       {/*  <span role="img" aria-label="toilet">
          🚽
        </span> */}
      </span>
    </div>
  );
};

export default Header;
