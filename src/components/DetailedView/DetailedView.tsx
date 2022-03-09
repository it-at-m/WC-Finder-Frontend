import { AiFillCloseCircle } from "react-icons/ai";
import "./DetailedView.css";
import { apiUri } from "../../constants";
import { useSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
// import key_logo from "./icons/eurokey.png"
// import door_logo from "./icons/door width.png"
// import ramp_logo from "./icons/ramp.png"
// import toiletIcon from "./icons/Toilet bowl.png"
// import blue from "./icons/BlueDot.png"
// import red from "./icons/RedDot.png"
// import green from "./icons/GreenDot.png"
// import yellow from "./icons/YellowDot.png"
// import urinal from "./icons/Urinal.png"
// import sink from "./icons/Sink.png"
// import flex from "./icons/FlexHand.png"
// import fix from "./icons/FixHand.png"
// import stand from "./icons/Standup.png"
// import mobile from "./icons/MobCeil.png"
// import water from "./icons/Water.png"
// import turning from "./icons/Turning.png"
// import barrier from "./icons/BarrierFree.png"
// // import door from "./icons/Door.png"
// import handrails_logo from "./icons/Handrails.jpg"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
// import { BsFillInfoCircleFill } from "react-icons/bs";
// import Popup from 'reactjs-popup';
import { useTranslation } from "react-i18next";
// import { Routes,Route } from "react-router-dom";
import Tab from "../Tabs/tab";

const DetailedView = () => {
  //data
  const {
    data: place
  } = useSelector((state) => state.placeSelected);
  // const [screen, setScreen] = useState("layout");
  
  // //Language
  // const {t}=useTranslation();
  
  // Cross Button Functionality
  const { nullSelectPlace } = useActions();

  // Images in Preview
  const [nextImage,setNextImage] = useState<boolean>(false)

  return (
    <div
      className={`preview__container preview__container--${place && "active"}`}
    >
      <div className="preview__close" onClick={() => nullSelectPlace()}>
        <AiFillCloseCircle>
        </AiFillCloseCircle>
      </div>
      <div className="preview__title">{place?.title}</div>
      <div className="preview__address">{place?.address}, {place?.zip_code} {place?.city}</div>
      <div
        className="preview__picture"
        style={{
          backgroundImage: nextImage
              ? `url(${apiUri}/get_layout/${place?.plan})`
              : `url(${apiUri}/get_image/${place?.photo})`,
        }}
      >
        {!nextImage ? <ArrowForwardIosIcon onClick={() => setNextImage(true)} className="next"/> :
            <ArrowBackIosIcon onClick={() => setNextImage(false)} className="previous"/>}</div>
    <Tab />
    </div>
  )

};

export default DetailedView;