import { AiFillCloseCircle } from "react-icons/ai";
import "./Preview.css";
import { apiUri } from "../../constants";
import { useSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import key_logo from "./icons/eurokey.png"
import door_logo from "./icons/door width.png"
import ramp_logo from "./icons/ramp.png"
import toiletIcon from "./icons/Toilet bowl.png"
import blue from "./icons/BlueDot.png"
import red from "./icons/RedDot.png"
import green from "./icons/GreenDot.png"
import yellow from "./icons/YellowDot.png"
import urinal from "./icons/Urinal.png"
import sink from "./icons/Sink.png"
import flex from "./icons/FlexHand.png"
import fix from "./icons/FixHand.png"
import stand from "./icons/Standup.png"
import mobile from "./icons/MobCeil.png"
import water from "./icons/Water.png"
import turning from "./icons/Turning.png"
import barrier from "./icons/BarrierFree.png"
import door from "./icons/Door.png"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Popup from 'reactjs-popup';


const Preview = () => {
  const {
    data: place
  } = useSelector((state) => state.placeSelected);

  const [nextImage,setNextImage] = useState<boolean>(false)
  const PopupExample = () => (
    <Popup trigger={<BsFillInfoCircleFill />} position="right center">
      <div
      className={`preview__container__new preview__container__new--${place && "active"}`}
    >
      <div className="preview__close__new" onClick={() => nullSelectPlace()}>
        <AiFillCloseCircle>
        </AiFillCloseCircle>
      </div>
      <div
        className="preview__picture__new"
        style={{
          backgroundImage:`url(${apiUri}/get_layout/${place?.plan})`
        }}
      ></div>
        <div><b className="LayoutTitle">Layout Explanation</b></div>
        <br />
        <div className="Layout1"><img src={blue} alt={"ToiletFlush"}></img>    Toilet Flush or tap</div>
        <br />
        <div className="Layout1"><img src={red} alt={"EmergencyCall"}></img>      Emergency call button or cord</div>
        <br />
        <div className="Layout1"><img src={green} alt={"DoorButton"}></img>    Door button open or close</div>
        <br />
        <div className="Layout1"><img src={yellow} alt={"LightSwitch"}></img>     Light Switch</div>
        <br />
        <div className="Layout1"><img src={toiletIcon} alt={"Toilet Bowl"}></img>     WC Toilet Bowl</div>
        <br />
        <div className="Layout1"><img src={urinal} alt={"Urinal"}></img>     Urinal</div>
        <br />
        <div className="Layout1"><img src={sink} alt={"Sink"}></img>     Sink</div>
        <br />
        <div className="Layout1"><img src={flex} alt={"Flexible Handrails"}></img>     Flexible Handrails</div>
        <br />
        <div className="Layout1"><img src={fix} alt={"Fixed Handrails"}></img>     Fixed Handrails</div>
        <br />
        <div className="Layout1"><img src={stand} alt={"StandupAid"}></img>     Standup Aid</div>
        <br />
        <div className="Layout1"><img src={mobile} alt={"Mobile Ceil"}></img>     Mobile ceiling lift</div>
        <br />
        <div className="Layout1"><img src={water} alt={"Water filter"}></img>     Water Filter with activated carbon</div>
        <br />
        <div className="Layout1"><img src={turning} alt={"Turning space"}></img>     Turning space in the room and infront of the toilet bowl</div>
        <br />
        <div className="Layout1"><img src={barrier} alt={"Shower"}></img>     Barrier-free shower</div>
        <br />
        <div className="Layout1"><img src={door} alt={"Door Handle"}></img>     Door/ WC Bowl handle</div>
      </div>
    </Popup>
  );
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
      <PopupExample />
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
          <button onClick={()=> window.open("https://www.google.com/maps/search/?api=1&query="+place?.position, "_blank")} className="GoButton">Go</button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
