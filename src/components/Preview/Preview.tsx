import { AiFillCloseCircle } from "react-icons/ai";
import "./Preview.css";
import { apiUri } from "../../constants";
import { useSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import key_logo from "./icons/eurokey.png"
import door_logo from "./icons/door width.png"
import ramp_logo from "./icons/ramp.png"

const Preview = () => {
  const {
    data: place
  } = useSelector((state) => state.placeSelected);

  const { nullSelectPlace } = useActions();
  return (
    <div
      className={`preview__container preview__container--${place && "active"}`}
    >
      <div className="preview__close" onClick={() => nullSelectPlace()}>
        <AiFillCloseCircle></AiFillCloseCircle>
      </div>
      <div
        className="preview__picture"
        style={{ backgroundImage: `url(${apiUri}/${place?.photo})` }}
      ></div>
      <div className="preview__description__container">
        <div className="preview__title">{place?.title}</div>
        <div className="preview__address">{place?.address}</div>
        <div className="preview__description">{place?.short_description}</div>
        <div className="grid_container">
          <div>
            <img src={key_logo} alt={"eurokey"} className="key_icon"></img>
          </div>
          <div className="preview__eurokey">
            Eurokey: {place?.eurokey ? "Required" : "Not required"}
          </div>
        </div>
        <div className="grid_container">
          <div>
            <img src={ramp_logo} alt={"ramp"} className="key_icon"></img>
          </div>
        <div className="preview__ramp_steepness">
          Ramp Steepness: {place?.ramp_steepness}%
        </div>
        </div>
        <div className="grid_container">
          <div>
            <img src={door_logo} alt={"doorwidth"} className="door_icon"></img>
          </div>
          <div className="preview__door_width">
            Door Width: {place?.door_width}cm
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
