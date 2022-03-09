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
import handrails_logo from "./icons/Handrails.jpg"
//import save from "./icons/bookmarkIcon.svg"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Popup from 'reactjs-popup';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Preview = () => {
  //data
  const {
    data: place
  } = useSelector((state) => state.placeSelected);
  const [screen, setScreen] = useState("layout");
  
  //Language
  const {t}=useTranslation();
  
  // Cross Button Functionality
  const { nullSelectPlace } = useActions();

  // Images in Preview
  const [nextImage,setNextImage] = useState<boolean>(false)

  //Handrails
  let handrails = {
    'lr': "Flexible Left & Flexible Right",
    'l': "Flexible Left",
    'rfl': "Fixed Left & Flexible Right",
    'flr':"Fixed Left & Flexible Right",
    'fr': "Fixed Right",
    'none': "No Grip",
    'lfr': "Flexible Left & Fixed Right",
    'r': "Flexible Right",
    'fl': "Fixed Left"
  }

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

      <Popup trigger={<BsFillInfoCircleFill className="Info" />}>
        <div className={`preview__container preview__container--${place && "active"}`}>
          <div className="preview__close__new" onClick={() => setScreen("preview")}>
            { screen === "preview" ? <Preview /> :  ""}
            <AiFillCloseCircle></AiFillCloseCircle>
          </div>
          <div className="preview__picture__new" style={{
            backgroundImage:`url(${apiUri}/get_layout/${place?.plan})`
          }}
          >
          </div>
          <div>
            <b className="LayoutTitle">{t("Layout Explanation")}</b>
          </div>
          <br />
          <div className="Layout1"><img src={blue} alt={"ToiletFlush"}></img>    {t("Toilet Flush or tap")}</div>
          <br />
          <div className="Layout1"><img src={red} alt={"EmergencyCall"}></img>      {t("Emergency call button or cord")}</div>
          <br />
          <div className="Layout1"><img src={green} alt={"DoorButton"}></img>    {t("Door button open or close")}</div>
          <br />
          <div className="Layout1"><img src={yellow} alt={"LightSwitch"}></img>     {t("Light Switch")}</div>
          <br />
          <div className="Layout1"><img src={toiletIcon} alt={"Toilet Bowl"}></img>     {t("WC Toilet Bowl")}</div>
          <br />
          <div className="Layout1"><img src={urinal} alt={"Urinal"}></img>     {t("Urinal")}</div>
          <br />
          <div className="Layout1"><img src={sink} alt={"Sink"}></img>     {t("Sink")}</div>
          <br />
          <div className="Layout1"><img src={flex} alt={"Flexible Handrails"}></img>     {t("Flexible Handrails")}</div>
          <br />
          <div className="Layout1"><img src={fix} alt={"Fixed Handrails"}></img>     {t("Fixed Handrails")}</div>
          <br />
          <div className="Layout1"><img src={stand} alt={"StandupAid"}></img>     {t("Standup Aid")}</div>
          <br />
          <div className="Layout1"><img src={mobile} alt={"Mobile Ceil"}></img>     {t("Mobile ceiling lift")}</div>
          <br />
          <div className="Layout1"><img src={water} alt={"Water filter"}></img>     {t("Water Filter with activated carbon")}</div>
          <br />
          <div className="Layout1"><img src={turning} alt={"Turning space"}></img>     {t("Turning space in the room and infront of the toilet bowl")}</div>
          <br />
          <div className="Layout1"><img src={barrier} alt={"Shower"}></img>     {t("Barrier-free shower")}</div>
          <br />
          <div className="Layout1"><img src={door} alt={"Door Handle"}></img>     {t("Door/ WC Bowl handle")}</div>
          <br />
        </div>
      </Popup>
      </div>
      <div className="preview__description__container">
        <div className="preview__title"><Link to='/Explanation'>{place?.title}</Link></div>
        <div className="preview__address">{place?.address}, {place?.zip_code} {place?.city}</div>
        <div className="preview__address">{place?.short_description}</div>
        <div className="grid_container">
          <div id="rcorners3" className="grid_child">
            <div className="PreviewBlock">
              <img src={key_logo} alt={"eurokey"} className="key_icon"></img>
            </div>
            <div className="preview__eurokey">
            {t("Eurokey")}: 
              <div className="bld">{(place?.eurokey) ? t("Required") : t("Not Required") }</div>
            </div>
          </div>
          <div id="rcorners3" className="grid_child">
          <div className="PreviewBlock">
            <img src={door_logo} alt={"doorwidth"} className="door_icon"></img>
          </div>
          <div className="preview__door_width">
            {t("Door Width")}: 
              <div className="bld">{place?.door_width}cm</div>
          </div>
          </div >
          <div id="rcorners3" className="grid_child">
            <div className="PreviewBlock">
             <img src={ramp_logo} alt={"ramp"} className="key_icon"></img>
            </div>
            <div className="preview__ramp_steepness">
              {t("Ramp Steepness")}: 
                <div className="bld">{place?.ramp_steepness}%</div>
            </div>
          </div>
          <div id="rcorners3" className="grid_child">
            <div className="PreviewBlock">
             <img src={handrails_logo} alt={"handrail"} className="handrail_icon"></img>
            </div>
            <div className="preview__handrail">
              {t("Handrails")}: 
                <div className="bld">{t(handrails[`${place?.grip}`])}</div>
            </div>
          </div>
        </div>
        <div className="Save">
          <div><button className="GoButton" onClick={()=> window.open("https://www.google.com/maps/search/?api=1&query="+place?.position, "_blank")}>{t("Go")}</button></div>
          {/* <div><img src={save} alt="Save" className="SaveImage"></img></div> */}
        </div>
      </div>
    </div>
  );
};

export default Preview;
