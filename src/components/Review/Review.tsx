/* eslint-disable jsx-a11y/anchor-is-valid */
import {  useState} from "react";
import {useActions} from "../../hooks/useActions";
import "./Review.css";
import { useSelector } from "../../hooks/useTypedSelector";
import thanks from "../Tabs/icons/thanks.svg"
import sad_image from "../Tabs/icons/SadFace.png"
import neutral_image from "../Tabs/icons/NuetralFace.png"
import happy_image from "../Tabs/icons/HappyFace.png"
// import { changePlace } from "../../state/action-creators";
import right from "./icons/RightArrow.svg"
import left from "./icons/LeftArrow.svg"
import { useTranslation } from "react-i18next";
// import info from "./icons/info.svg"
// import { ReviewPhotoStore } from "../../state/action-creators";

const Review = () => {

    const {
        data: place
    } = useSelector((state) => state.placeSelected);
    const formSteps = document.querySelectorAll(".form-step");
    //const progressSteps = document.querySelectorAll(".progress-step");
    let [formStepsNumNext, setformStepsNumNext] = useState(0);
    // let [step, setStep]=useState(1);
    let [selectedValue,setSelectedValue] = useState('');
    let [cleanVal,setCleanVal]=useState('');
    let [location, setlocation]=useState('');
    let [photos, setPhotos] = useState('');
    let [accuracy, setAccuracy]=useState('');
    let [layout,setLayout]=useState(false);
    let [Filter,setFilter] = useState(false);
    let [direction,setDirection] =useState(false);
    let [eurokey,setEurokey] =useState(false);
    //const [image, setImage] = useState({ photo: '', raw: '',name:'' })
    // const [selectedFile,setSelectedFile]=useState(null)
    // const isMounted = useRef(false);

    // const { ReviewPhotoStore } = useActions();
    // const handleUpload= (e) => {
    //     if (isMounted.current) {
    //         ReviewPhotoStore({
    //             name: place?.title,
    //             photo: selectedFile
    //         });
    // } else {
    //   isMounted.current = true;
    // }}
    const optionSelectedExperience = (e) => {
        setSelectedValue(e.target.value)
    }

    const optionSelectedClean = (e) => {
        setCleanVal(e.target.value)
    }

    const optionSelectedLocate = (e) =>{
        setlocation(e.target.value)
    }

    const optionSelectedPhoto = (e) =>{
        setPhotos(e.target.value)
    }

    const optionSelectedAccurate = (e) =>{
        setAccuracy(e.target.value)
    }

    const reset = () =>{
        setState({ ...initialState });
        setSelectedValue('')
        setCleanVal('')
        setPhotos('')
        setAccuracy('')
        setlocation('')
        setLayout(false)
        setFilter(false)
        setDirection(false)
        setEurokey(false)
    }

    function cleartext() {
        setState(prevState => ({ ...prevState, moreinfo: ""}));
    }

    

    const {ReviewPlace} = useActions();

    function nextBtns() {
        formStepsNumNext++;
        setformStepsNumNext(formStepsNumNext);
        updateNext();
    }

    function prevBtns() {
        formStepsNumNext--;
        setformStepsNumNext(formStepsNumNext);
        updatePrev();
    }

    function updatePrev() {
        formSteps[formStepsNumNext].classList.add("form-step-active");
        formSteps[formStepsNumNext + 1].classList.remove("form-step-active");
        // console.log("3. Update ",formStepsNumNext);
        // progressSteps[formStepsNumNext].classList.add("progress-step-active");
        // progressSteps[formStepsNumNext + 1].classList.remove("progress-step-active");
    }

    function updateNext() {
        formSteps[formStepsNumNext].classList.add("form-step-active");
        formSteps[formStepsNumNext - 1].classList.remove("form-step-active");
        console.log("2. Update ",formStepsNumNext);
        // progressSteps[formStepsNumNext].classList.add("progress-step-active");
        // if(formStepsNumNext<2){
        //     progressSteps[formStepsNumNext].classList.add("progress-step-active");
        // }
    }


    const initialState = {
        Experience: 0,
        Clean: 0,
        locate: 2,
        photo: 2,
        accurate: 2,
        moreinfo: "",
        layout: false,
        direction: false,
        Filter: false,
        eurokey: false
    };

    let [{ Experience, Clean, locate, photo, accurate, moreinfo }, setState] = useState(initialState);

    const onChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value}));
    };


    function handleSubmit() {
        ReviewPlace({
            name: place?.title,
            experience: Experience,
            clean: Clean,
            findToilet: locate,
            photosUseful: photo,
            infoAccurate: accurate,
            moreExperience: moreinfo,
            layouts: layout,
            filter: Filter,
            direction: direction,
            euro: eurokey
        });
        nextBtns();
        reset();
    }

    //Language
    const {t}=useTranslation();

    //No Accuracy Checked
    const NoAccurate =<div>
        <p className="Inact">{t("We are sorry you found our information inaccurate! Can you please tell us which one below was not accurate?")}</p>
    <div className="AccurateContainer">
    <div className="SelectButtons" onChange={(e)=>onChange(e)}>
        <button className={layout?"AccurateButtonSelected":"AccurateButton"} name="layout" value="true" onClick={()=>setLayout(true)}>{t("Layout")}</button>
        <button className={Filter?"AccurateButtonSelected":"AccurateButton"} name="Filter" onClick={()=>setFilter(true)} value="true">{t("Filters")}</button>
        <button className={direction?"AccurateButtonSelected":"AccurateButton"} name="direction" onClick={()=>setDirection(true)} value="true">{t("Directions")}</button>
        <br />
        <button className={eurokey?"AccurateButtonSelected":"AccurateButton"} name="eurokey" onClick={()=>setEurokey(true)} value="true">{t("Eurokey Requirement")}</button>
    </div>
    </div>
    </div>
    
    // useEffect(()=>{
    //     const Change = async() =>{
    //       changePlace(place?.id,step===3?setStep(1):step);
    //     }
    //     Change();
    //   });

    //Image
    // const handleChange = (e) => {
    //     setSelectedFile(e.target.files[0])
    //     // setImage({
    //     //  photo: URL.createObjectURL(e.target.files[0]),
    //     //  raw: e.target.files[0],
    //     //  name: (place?.title)===undefined?'':place?.title
    //     // })
    // }

    // const handleUpload = (e) => {
    //     const formData = new FormData();
        
    
    //     formData.append('File', selectedFile===null?'':selectedFile);
    //     axios.post('https://backend.inclus.de/loadphoto',
    //     {
    //         method:'POST',
    //         body: formData,
    //         headers:{
    //             name: (place?.title)===undefined?'':place?.title,
    //             ContentType: "multipart/form-data"
    //         }
    //     })
    //     .then(res=>{
    //         console.log(res)
    //     })
    // //     console.log(formData)
	// // 	fetch(
	// // 		'https://backend.inclus.de/loadphoto',
	// // 		{
	// // 			method: 'POST',
	// // 			body: formData,
    // //             headers: {name: (place?.title)===undefined?'':place?.title,
    // //                 photo: selectedFile.photo,
    // //                 ContentType: "multipart/form-data"}
	// // 		}
	// // 	)
	// // 		.then((response) => response.json)
	// // 		.then((result) => {
	// // 			console.log('Success:', result);
	// // 		})
	// // 		.catch((error) => {
	// // 			console.error('Error:', error);
	// // 		});
	// };

    return (
        <div>
            {/* <!-- Steps --> */}
            <div className="form-step form-step-active" >
            <div className="Next">
                <button className="btn btn-next" onClick={nextBtns}>{t("Next")}</button>
                <img src={right} alt="right"></img>
            </div>
            <br />
            <h3 className="Exp">{t("How was your experience?")}</h3>
            <br/>
            <div className="RadioButton" onChange={(e) => onChange(e)}>
                <label>
                    <input type="radio" name="Experience" onChange={optionSelectedExperience} checked={selectedValue==='1'} id="ExpGood" value={1}/>
                    <img src={sad_image} alt="I'm sad" />
                </label>
                <label>
                    <input type="radio" name="Experience" onChange={optionSelectedExperience} checked={selectedValue==='2'} id="ExpNeutral" value={2}/>
                    <img src={neutral_image} alt="I'm neutral" />
                </label>
                <label>
                    <input type="radio" name="Experience" onChange={optionSelectedExperience} checked={selectedValue==='3'} id="ExpSad" value={3}/>
                    <img src={happy_image} alt="I'm happy" />
                </label>
            </div>
            <br/>

            <h3>{t("Was the toilet clean?")}</h3>
            <br/>
            <div className="RadioButton" onChange={(e) => onChange(e)}>
                <label>
                    <input type="radio" name="Clean" id="CleanGood" onChange={optionSelectedClean} checked={cleanVal==='1'} value={1}/>
                    <img src={sad_image} alt="I'm sad" />
                </label>
                <label>
                    <input type="radio" name="Clean" id="CleanNeutral" onChange={optionSelectedClean} checked={cleanVal==='2'} value={2}/>
                    <img src={neutral_image} alt="I'm neutral" />    
                </label>
                <label>
                    <input type="radio" name="Clean" id="CleanSad"  onChange={optionSelectedClean} checked={cleanVal==='3'} value={3}/>
                    <img src={happy_image} alt="I'm happy" />    
                </label>
            </div>

            <br />
            <div className="ShortText" onChange={(e)=>onChange(e)}>
                <label><h3>{t("Can you tell us a little more about your")} <br/>{t("experience? (Optional)")}</h3></label><br/>
                <textarea name="moreinfo" className="Paragraph" id="output"
                          placeholder={t("Type your comment here")} value={moreinfo}></textarea>
            </div>
            <button id="clear" className="btn Cancel" onClick={cleartext}>{t("Clear Text")}</button>
            </div>
            
            <div className="form-step">
            <div className="Back">
                <img src={left} alt="left"></img>
                <button className="btn btn-prev" id="Previous" onClick={prevBtns}>{t("Back")}</button>
            </div>
            <div>
            <br/>
            <br/>
            <br/>
            <h3>{t("Did you find the toilet easily?")}</h3>
            <div className="RadioButton" onChange={(e) => onChange(e)}>
                <label className="Text">
                    <input type="radio" name="locate" id="Found" onChange={optionSelectedLocate} checked={location==='1'} value={1}/>{t("Yes")}</label>
                <label className="Text">
                    <input type="radio" name="locate" id="NotFound" onChange={optionSelectedLocate} checked={location==='0'} value={0}/>{t("No")}</label>
            </div>
            <h3>{t("Were the photos sufficient?")}</h3>
            <div className="RadioButton" onChange={(e) => onChange(e)}>
                <label className="Text">
                    <input type="radio" name="photo" id="PhotosUseful" onChange={optionSelectedPhoto} checked={photos==='1'} value={1}/>{t("Yes")}</label>
                <label className="Text">
                    <input type="radio" name="photo" id="PhotosNotUseful" onChange={optionSelectedPhoto} checked={photos==='0'} value={0}/>{t("No")}</label>
            </div>
            <h3>{t("Was the information accurate?")}</h3>
            <div className="RadioButton" onChange={(e) => onChange(e)}>
                <label className="Text">
                    <input type="radio" name="accurate" id="AccurateInfo" onChange={optionSelectedAccurate} checked={accuracy==='1'} value={1}/>{t("Yes")}</label>
                <label className="Text">
                    <input type="radio" name="accurate" id="NotAccurateInfo" onChange={optionSelectedAccurate} checked={accuracy==='0'} value={0}/>{t("No")}</label>
            </div>
            {accuracy==='0' && NoAccurate}
            <button className="btn Submit btn-next" onClick={handleSubmit}>{t("Submit")}</button>
            <br />
            </div>
            </div>
            
            <div className="form-step" >
            <div className="Back">
                <img src={left} alt="left"></img>
                <button className="btn btn-prev" id="Previous" onClick={prevBtns}>{t("Back")}</button>
            </div>
            <br />
            <br />
            <br />
                <h3 className="Thankyou">{t("Thanks for your feedback!")}</h3>
                <br />
                <p className="Thankyou">{t("Your feedback would help us")} <br /> {t("improve our service")}</p>
                <img src={thanks} alt="Thankyou" className="ImageThank"/>
                <br />
                <br />
                {/* <div className="PhotosContainer">
                    <div className="Valid"><h3>Help us update our photos </h3><img src={info} alt="information" className="images"/></div>
                    
                    <label className="AddPhoto">
                        <input type="file" onChange={handleChange}/>Add Photo
                    </label>
                    {/* {selectedFile.photo!==''?<div className="imageName">Image name: {selectedFile.name}</div>:''} */}
                    {/* <button formMethod="POST" onClick={handleUpload}  formEncType="multipart/form-data" >Upload</button>
                    
                </div> */} 
                {/* <div className="PhotosContainer">
                    <div className="Valid"><h3>Help us update our photos </h3><img src={info} alt="information" className="images"/></div>
                    <label className="AddPhoto">
                        <input type="file" onChange={handleChange} accept="image/*">Add Photo</input>
                    {/* formAction={apiUri} formMethod="POST" formEncType="multipart/form-data" */}
                    {/* </label>
                </div> */}
            </div>
            {/* <!-- Progress bar --> */}
            {/* <div className="progressbar"
                <div className="progress-step progress-step-active"></div>
                <div className="progress-step"></div>
            </div> */}
        </div>
    )
};

export default Review;