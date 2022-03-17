import { useEffect, useRef, useState } from "react";
import "./tab.css";
import Review from "../Review/Review"
import { apiUri, ReviewApi } from "../../constants";
import { useSelector } from "../../hooks/useTypedSelector";
import { useTranslation } from "react-i18next";
import key_logo from "../Preview/icons/eurokey.png";
import handrails_logo from "../Preview/icons/Handrails.png"
import door_logo from "../Preview/icons/door width.png"
import ramp_logo from "../Preview/icons/ramp.png"
import LastUpdate_logo from "./icons/LastUpdate.png"
import blue from "../Preview/icons/BlueDot.png"
import red from "../Preview/icons/RedDot.png"
import green from "../Preview/icons/GreenDot.png"
import yellow from "../Preview/icons/YellowDot.png"
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
// import sad from "./icons/SadFace.png"
// import neutral from "./icons/NuetralFace.png"
// import happy from "./icons/HappyFace.png"
// import thanks from "./icons/Thanks.png"
// import { useActions } from "../../hooks/useActions";
import question from "./icons/Question_icon.png"

function Tabs() {
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

  const AllLegends=showLegends?'Show Few Legends':'Show All Legends'
  
  const extraContent=<div className="Layout">
    <div className="EachLayer"><img src={toiletIcon} alt={"Toilet Bowl"} />     {t("WC Toilet Bowl")}<br />
    <img src={urinal} alt={"Urinal"} />     {t("Urinal")}<br />
    <img src={sink} alt={"Sink"} />     {t("Sink")}<br />
    <img src={flex} alt={"Flexible Handrails"} />     {t("Flexible Handrails")}<br />
    <img src={fix} alt={"Fixed Handrails"} />     {t("Fixed Handrails")}<br />
    <img src={stand} alt={"StandupAid"} />     {t("Standup Aid")}<br />
    <img src={mobile} alt={"Mobile Ceil"} />     {t("Mobile ceiling lift")}<br />
    <img src={water} alt={"Water filter"} />     {t("Water Filter with activated carbon")}<br />
    <img src={turning} alt={"Turning space"} />     {t("Turning space in the room and infront of the toilet bowl")}<br />
    <img src={barrier} alt={"Shower"} />     {t("Barrier-free shower")}<br />
    <img src={door} alt={"Door Handle"} />     {t("Door/ WC Bowl handle")}</div>
    <div className="Detail">
    <button className="DetailsContact" onClick={()=>{setShowLegends(!showLegends)}}>{AllLegends}</button>
    </div>
    </div>  

  const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });
}
  
  // ReviewSubmit 
  // const SubmitReview = <div>
  //   <h3>Thanks for your feedback</h3>
  //   <br />
  //   <h4>Your feedback would help us <br /> improve our service</h4>
  //   <img src={thanks} alt="Thankyou" />
  // </div>

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
            <div className="Euro">{t("Handrails")}:<b>{t(handrails[`${place?.grip}`])}</b></div>
            </div>
            <div className="Filter"><img src={ramp_logo} alt={"Ramp Gradient"} className="key_icon"></img>
            <div className="Euro">{t("Ramp Steepness")}:<b>{place?.ramp_steepness}%</b></div>
            </div>
            <div className="Filter"><img src={door_logo} alt={"Door width"} className="key_icon"></img>
            <div className="Euro">{t("Door Width")}:<b>{place?.door_width}cm</b></div>
            </div>
          </div>
          </div>
          <div className="DetailInfo">
            <button className="Details" onClick={()=>setToggleState(2)}>See More Details</button>
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
          <hr />
          <div>
            <div className="combine"><h2>Help keep our photos updated</h2><img src={question} alt="information" className="image"/></div>
            <div className="LastUpdateInfo">If you notice the photos are inaccurate, let us know by adding a photo!</div>
          </div>
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