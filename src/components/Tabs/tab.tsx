import { useState } from "react";
// import {useEffect, useRef} from "react";
import "./tab.css";
// import Review from "../Review/Review"
// import { ReviewApi } from "../../constants";
import { apiUri } from "../../constants";
import { useSelector } from "../../hooks/useTypedSelector";
import { useTranslation } from "react-i18next";
import key_logo from "../Preview/icons/eurokey.svg";
import handrails_logo from "../Preview/icons/handrailS.svg"
import door_logo from "../Preview/icons/door width.svg"
import ramp_logo from "../Preview/icons/ramp.svg"
import LastUpdate_logo from "./icons/LastUpdate.svg"
import blue from "../Preview/icons/BlueDot.svg"
import red from "../Preview/icons/RedDot.svg"
import green from "../Preview/icons/GreenDot.svg"
import yellow from "../Preview/icons/YellowDot.svg"
import urinal from "../Preview/icons/Urinal.png"
import sink from "../Preview/icons/Sink.png"
import flex from "../Preview/icons/FlexHand.png"
import fix from "../Preview/icons/FixHand.png"
import stand from "../Preview/icons/Standup.png"
import mobile from "../Preview/icons/MobCeil.png"
import water from "../Preview/icons/Water.png"
import turning from "../Preview/icons/Turning.png"
import barrier from "../Preview/icons/BarrierFree.png"
import toiletIcon from "../Preview/icons/Toilet bowl.png"
import door from "../Preview/icons/Door.png"
import Review from "../Review/Review";
// import sad from "./icons/SadFace.png"
// import neutral from "./icons/NuetralFace.png"
// import happy from "./icons/HappyFace.png"
// import thanks from "./icons/Thanks.png"
// import { useActions } from "../../hooks/useActions";
// import question from "./icons/Question_icon.png"

function Tabs() {

  // Toggle between Tabs
  const [toggleState, setToggleState] = useState(1);
  const [showLegends, setShowLegends] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  
  const {
    data: place
  } = useSelector((state) => state.placeSelected);
  
  //Language
  const {t}=useTranslation();

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

  //Legends
  const AllLegends=showLegends?'Show Few Legends':'Show All Legends'
  
  const extraContent=<div className="Layout">
    <div className="EachLayer"><img src={toiletIcon} alt={"Toilet Bowl"} ></img>    {t("WC Toilet Bowl")}<br />
    <img src={urinal} alt={"Urinal"} ></img>     {t("Urinal")}<br />
    <img src={sink} alt={"Sink"} ></img>     {t("Sink")}<br />
    <img src={flex} alt={"Flexible Handrails"}></img>     {t("Flexible Handrails")}<br />
    <img src={fix} alt={"Fixed Handrails"}></img>     {t("Fixed Handrails")}<br />
    <img src={stand} alt={"StandupAid"} ></img>     {t("Standup Aid")}<br />
    <img src={mobile} alt={"Mobile Ceil"} ></img>     {t("Mobile ceiling lift")}<br />
    <img src={water} alt={"Water filter"} ></img>     {t("Water Filter with activated carbon")}<br />
    <img src={turning} alt={"Turning space"} ></img>     {t("Turning space in the room and infront of the toilet bowl")}<br />
    <img src={barrier} alt={"Shower"} ></img>     {t("Barrier-free shower")}<br />
    <img src={door} alt={"Door Handle"} ></img>     {t("Door/ WC Bowl handle")}</div>
    <div className="Detail">
    <br />
    <button className="DetailsContact" onClick={()=>{setShowLegends(!showLegends)}}>{AllLegends}</button>
    </div>
    </div>  
  // ReviewSubmit 
  // const SubmitReview = <div>
  //   <h3>Thanks for your feedback</h3>
  //   <br />
  //   <h4>Your feedback would help us <br /> improve our service</h4>
  //   <img src={thanks} alt="Thankyou" />
  // </div>

  //Upload File
  // const [state,setState] = useState();
  // const  [selectedFile,IsSelectedFile] = useState();

  // let fileChangedHandler = (event) => {
  //   setState({ selectedFile: event.target.files })
  // }

  // uploadHandler = () => {
  // console.log(state.selectedFile)
  // }

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Overview
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Toilet Info
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Review
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="preview__address">{place?.short_description}</div>
          <div className="Layout">
          <div className="EachLayer">
            <div className="Filter"><img src={key_logo} alt={"eurokey"} className="key_icon"></img>
            <div className="Euro">{t("Eurokey")}: <b>{(place?.eurokey) ? t("Required") : t("Not Required") }</b></div>
            </div>
            <div className="Filter"><img src={handrails_logo} alt={"handrail"} className="key_icon"></img>
            <div className="Euro">{t("Handrails")}: <b>{t(handrails[`${place?.grip}`])}</b></div>
            </div>
            <div className="Filter"><img src={ramp_logo} alt={"Ramp Gradient"} className="key_icon"></img>
            <div className="Euro">{t("Ramp Steepness")}: <b>{place?.ramp_steepness}%</b></div>
            </div>
            <div className="Filter"><img src={door_logo} alt={"Door width"} className="key_icon"></img>
            <div className="Euro">{t("Door Width")}: <b>{place?.door_width}cm</b></div>
            </div>
          </div>
          </div>
          <div className="DetailInfo">
            <button className="DetailsContact" onClick={()=>setToggleState(2)}>See More Details</button>
          </div>
          <div className="LastUpdateInfo">
            <img src={LastUpdate_logo} className="images" alt="Last Updated" />  Last Updated: {place?.modified}
          </div>
          <hr />
          <div className="LayoutTitle">
            {t("Layout Explanation")}
          </div>
          <div className="preview__picture__new" style={{
            backgroundImage:`url(${apiUri}/get_layout/${place?.plan})`
          }}
          ></div>
          <div className="Layout">
          <div className="EachLayer"><img src={blue} className="LayoutsImage" alt={"ToiletFlush"}></img>    {t("Toilet Flush or tap")}<br />
          <img src={red} alt={"EmergencyCall"} className="LayoutsImage"></img>      {t("Emergency call button or cord")}<br />
          <img src={green} alt={"DoorButton"} className="LayoutsImage"></img>    {t("Door button open or close")}<br />
          <img src={yellow} alt={"LightSwitch"} className="LayoutsImage"></img>     {t("Light Switch")}</div>
          </div>
          <div className="Detail">
            <button className={showLegends===true? "LegendsAll" :"DetailsContact"} onClick={()=>{setShowLegends(!showLegends)}}>{AllLegends}</button>
            {showLegends && extraContent}
          </div>
          <div className="GoContainer">
            <button className="GoButton" onClick={()=> window.open("https://www.google.com/maps/search/?api=1&query="+place?.position, "_blank")}>{t("Go")}</button>
          </div>
          <br />
          {/* <div>
            <div className="combine"><h2>Help keep our photos updated</h2><img src={question} alt="information" className="image"/></div>
            <div className="LastUpdateInfo">If you notice the photos are inaccurate, let us know by adding a photo!</div>
            <input type="file" onChange={()=>fileChangedHandler()} />
            <button onClick={()=>uploadHandler()}>Upload!</button>
          </div> */}
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>{t("Toilet Information")}</h2>
          <br />
          <h3>{t("Indoor Navigation to the toilet")}</h3>
          <p>{place?.direction}</p>
          <br />
          <h3>{t("Access to the toilet")}</h3>
          <p>{place?.access}</p>
          <br />
          <h3>{t("Interior Description")}</h3>
          <p>{place?.interior_description}</p>
          <br />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <Review />
        </div>
      </div>
    </div>
  );
}

export default Tabs;