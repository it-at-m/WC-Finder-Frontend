import { AiFillCloseCircle } from "react-icons/ai";
import "./Preview.css";
import { apiUri } from "../../constants";
import { ImKey } from "react-icons/im";
import { CgArrowsShrinkH } from "react-icons/cg";
import { useSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

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
        <div className="preview__description">{place?.short_description}</div>
        <div className="grid_container">
          <div>
            <ImKey className="key_icon"></ImKey>
          </div>
          <div className="preview__eurokey">
            Eurokey: {place?.eurokey ? "Required" : "Not required"}
          </div>
        </div>
        <div className="preview__ramp_steepness">
          Ramp Steepness: {place?.ramp_steepness}%
        </div>
        <div className="grid_container">
          <div>
            <CgArrowsShrinkH className="door_icon"></CgArrowsShrinkH>
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
