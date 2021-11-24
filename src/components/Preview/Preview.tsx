import { connect } from "react-redux";
import { setPlacePreviewVisibility } from "../../store/actions";
import { IState } from "../../store/models";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Preview.css";
import { apiUri } from "../../constants";
import { ImKey } from "react-icons/im";
import{ CgArrowsShrinkH } from "react-icons/cg"


const Preview = ({ isVisible, place, closePreview }: any) => {
  return (
    <div
      className={`preview__container preview__container--${
        isVisible && place && "active"
      }`}
    >
      <div className="preview__close" onClick={() => closePreview()}>
        <AiFillCloseCircle></AiFillCloseCircle>
      </div>
      <div
        className="preview__picture"
        style={{ backgroundImage: `url(${apiUri},${place?.photo})` }}
      ></div>
      <div className="preview__description__container">
        <div className="preview__title">{place?.title}</div>
        <div className="preview__description">{place?.short_description}</div>
        <div className="grid_container">
          <div><ImKey className="key_icon"></ImKey></div>
          <div className="preview__eurokey">Eurokey: {place?.eurokey === 0 ? "Not required" : "Required"}</div>
        </div>
        <div className="preview__ramp_steepness">Ramp Steepness: {place?.ramp_steepness}%</div>
        <div className="grid_container">
          <div><CgArrowsShrinkH className="door_icon"></CgArrowsShrinkH></div>
          <div className="preview__door_width">Door Width: {place?.door_width}cm</div>
        </div>
        {/* <div style={{display: 'flex'}}>
          <a className="preview__button" href={place?.seeMoreLink} target="_blank" rel="noreferrer">See more</a>
        </div> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  const { places } = state;
  return { isVisible: places.placePreviewsIsVisible, place: places.selectedPlace };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    closePreview: () =>
      dispatch(setPlacePreviewVisibility(false)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
