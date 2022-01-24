import { AiFillCloseCircle } from "react-icons/ai";
import "./Preview.css";
import { apiUri } from "../../constants";
import { useSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import key_logo from "./icons/eurokey.png"
import door_logo from "./icons/door width.png"
import ramp_logo from "./icons/ramp.png"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";

const Preview = () => {
  const {
    data: place
  } = useSelector((state) => state.placeSelected);

  const [nextImage,setNextImage] = useState<boolean>(false)
  const { nullSelectPlace } = useActions();
  return (
    <div
      className={`preview__container preview__container--${place && "active"}`}
    >
      <div className="preview__close" onClick={() => nullSelectPlace()}>
        <AiFillCloseCircle>
        </AiFillCloseCircle>
      </div>
      <div
        className="preview__picture"
        style={{
          backgroundImage: nextImage
              ? `url(${apiUri}/get_layout/${place?.plan})`
              : `url(${apiUri}/get_image/${place?.photo})`,
        }}
      >
        {!nextImage ? <ArrowForwardIosIcon onClick={() => setNextImage(true)} className="next"/> :
            <ArrowBackIosIcon onClick={() => setNextImage(false)} className="previous"/>}

      </div>
      <div className="preview__description__container">
        <div className="preview__title">{place?.title}</div>
        <div className="preview__address">{place?.address}, {place?.zip_code} {place?.city}</div>
        <div className="preview__description">{place?.short_description}</div>
        <div className="grid_container">
          <div id="rcorners3" className="grid_child">
            <div>
              <img src={key_logo} alt={"eurokey"} className="key_icon"></img>
            </div>
            <div className="preview__eurokey">
            Eurokey: 
              <div><b>{place?.eurokey ? "Required" : "Not required"}</b></div>
            </div>
            </div>
          <div id="rcorners3" className="grid_child">
          <div>
            <img src={door_logo} alt={"doorwidth"} className="door_icon"></img>
          </div>
          <div className="preview__door_width">
            Door Width: 
              <div><b>{place?.door_width}cm</b></div>
          </div>
          </div>
          <div id="rcorners3" className="grid_child">
            <div>
             <img src={ramp_logo} alt={"ramp"} className="key_icon"></img>
            </div>
            <div className="preview__ramp_steepness">
              Ramp Steepness: 
                <div><b>{place?.ramp_steepness}%</b></div>
            </div>
          </div>
        </div>
        <div>
          <button onClick={()=> window.open("https://www.google.com/maps/@"+place?.position+",15z", "_blank")} className="GoButton">Go</button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
