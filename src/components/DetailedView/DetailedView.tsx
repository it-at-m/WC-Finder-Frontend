import { AiFillCloseCircle } from "react-icons/ai";
import "./DetailedView.css";
import { apiUri } from "../../constants";
import { useSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import Tab from "../Tabs/tab";

const DetailedView = () => {
  //data
  const {
    data: place
  } = useSelector((state) => state.placeSelected);
  
  
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