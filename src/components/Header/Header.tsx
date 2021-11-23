import { connect } from "react-redux";
import { setSearchVisibility } from "../../store/actions";
import { IState } from "../../store/models";
import "./Header.css";
//import { CgSearch} from "react-icons/cg";

const Header = ({ searchIsVisible, setSearchVisibility }: any) => {

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

const mapStateToProps = (state: IState) => {
  const { search } = state;
  return search;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setSearchVisibility: (payload: boolean) =>
      dispatch(setSearchVisibility(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
