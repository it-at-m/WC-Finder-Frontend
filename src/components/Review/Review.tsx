/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState} from "react";
import {useActions} from "../../hooks/useActions";
import "./Review.css";
import { useSelector } from "../../hooks/useTypedSelector";
import thanks from "../Tabs/icons/thanks.svg"
import sad_image from "../Tabs/icons/SadFace.png"
import neutral_image from "../Tabs/icons/NuetralFace.png"
import happy_image from "../Tabs/icons/HappyFace.png"
import { changePlace } from "../../state/action-creators";
import right from "./icons/RightArrow.svg"
import left from "./icons/LeftArrow.svg"
import info from "./icons/info.svg"

const Review = () => {
    const formSteps = document.querySelectorAll(".form-step");
    // const progressSteps = document.querySelectorAll(".progress-step");
    let [formStepsNumNext, setformStepsNumNext] = useState(0);
    let [step, setStep]=useState(1);
    let [selectedValue,setSelectedValue] = useState('');
    let [cleanVal,setCleanVal]=useState('');
    let [location, setlocation]=useState('');
    let [photos, setPhotos] = useState('');
    let [accuracy, setAccuracy]=useState('');
    let [layout,setLayout]=useState(false);
    let [Filter,setFilter] = useState(false);
    let [direction,setDirection] =useState(false);
    let [eurokey,setEurokey] =useState(false);
    const [image, setImage] = useState({ preview: '', raw: '' })

    const optionSelectedExperience = (e) => {
        console.log(e.target.value)
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

    const cleartext = () => {
        setState(initialState);
    }

    const {
        data: place
    } = useSelector((state) => state.placeSelected);

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
        console.log("3. Update ",formStepsNumNext);
        // progressSteps[formStepsNumNext].classList.add("progress-step-active");
        // progressSteps[formStepsNumNext + 1].classList.remove("progress-step-active");
    }

    function updateNext() {
        formSteps[formStepsNumNext].classList.add("form-step-active");
        formSteps[formStepsNumNext - 1].classList.remove("form-step-active");
        console.log("2. Update ",formStepsNumNext);
        // progressSteps[formStepsNumNext].classList.add("progress-step-active");
        // if(formStepsNumNext<1){
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


    let [{ Experience, Clean, locate, photo, accurate, moreinfo}, setState] = useState(initialState);

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


    //No Accuracy Checked
    const NoAccurate = <div className="AccurateContainer">
    <div className="SelectButtons" onChange={(e)=>onChange(e)}>
        <button className={layout?"AccurateButtonSelected":"AccurateButton"} name="layout" value="true" onClick={()=>setLayout(true)}>Layout</button>
        <button className={Filter?"AccurateButtonSelected":"AccurateButton"} name="Filter" onClick={()=>setFilter(true)} value="true">Filters</button>
        <button className={direction?"AccurateButtonSelected":"AccurateButton"} name="direction" onClick={()=>setDirection(true)} value="true">Directions</button>
        <br />
        <button className={eurokey?"AccurateButtonSelected":"AccurateButton"} name="eurokey" onClick={()=>setEurokey(true)} value="true">Eurokey Information</button>
    </div>
    </div>
    
    useEffect(()=>{
        const Change = async() =>{
          changePlace(place?.id,step===3?setStep(1):step);
        }
        Change();
      });

    //Image
    const handleChange = (e) => {
        setImage({
         preview: URL.createObjectURL(e.target.files[0]),
         raw: e.target.files[0]
        })
    }

    return (
        <div>
            {/* <!-- Steps --> */}
            <div className="form-step form-step-active" >
            <div className="Next">
                <button className="btn btn-next" onClick={nextBtns}>Next</button>
                <img src={right} alt="right"></img>
            </div>
            <br />
            <h3 className="Exp">How was your experience?</h3>
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

            <h3>Was the toilet clean?</h3>
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
            <div className="ShortText" onChange={(e) => onChange(e)}>
                <label><h3>Can you tell us a little more about your <br/>experience? (Optional)</h3></label><br/>
                <textarea name="moreinfo" className="Paragraph" id="output"
                          placeholder="    Type your comment here" value={moreinfo}></textarea>
            </div>
            <button id="clear" className="btn Cancel" onClick={cleartext}>Clear Text</button>
            </div>
            
            <div className="form-step">
            <div className="Back">
                <img src={left} alt="left"></img>
                <button className="btn btn-prev" id="Previous" onClick={prevBtns}>Back</button>
            </div>
            <div>
            <br/><br/><br/>
            <h3>Did you find the toilet easily?</h3>
            <div className="RadioButton" onChange={(e) => onChange(e)}>
                <label className="Text">
                    <input type="radio" name="locate" id="Found" onChange={optionSelectedLocate} checked={location==='1'} value={1}/>Yes</label>
                <label className="Text">
                    <input type="radio" name="locate" id="NotFound" onChange={optionSelectedLocate} checked={location==='0'} value={0}/>No</label>
            </div>
            <h3>Were the photos sufficient?</h3>
            <div className="RadioButton" onChange={(e) => onChange(e)}>
                <label className="Text">
                    <input type="radio" name="photo" id="PhotosUseful" onChange={optionSelectedPhoto} checked={photos==='1'} value={1}/>Yes</label>
                <label className="Text">
                    <input type="radio" name="photo" id="PhotosNotUseful" onChange={optionSelectedPhoto} checked={photos==='0'} value={0}/>No</label>
            </div>
            <h3>Was the information accurate?</h3>
            <div className="RadioButton" onChange={(e) => onChange(e)}>
                <label className="Text">
                    <input type="radio" name="accurate" id="AccurateInfo" onChange={optionSelectedAccurate} checked={accuracy==='1'} value={1}/>Yes</label>
                <label className="Text">
                    <input type="radio" name="accurate" id="NotAccurateInfo" onChange={optionSelectedAccurate} checked={accuracy==='0'} value={0}/>No</label>
            </div>
            {accuracy==='0' && NoAccurate}
            <button className="btn Submit btn-next" onClick={handleSubmit}>Submit</button>
            </div>
            </div>
            
            <div className="form-step" >
            <div className="Back">
                <img src={left} alt="left"></img>
                <button className="btn btn-prev" id="Previous" onClick={prevBtns}>Back</button>
            </div>
            <br />
            <br />
            <br />
                <h3 className="Thankyou">Thanks for your feedback!</h3>
                <br />
                <p className="Thankyou">Your feedback would help us <br /> improve our service</p>
                <img src={thanks} alt="Thankyou" className="ImageThank"/>
                <br />
                <div className="PhotosContainer">
                    <div className="Valid"><h3>Help us update our photos </h3><img src={info} alt="information" className="images"/></div>
                    {/* <input type="file" onChange={()=>fileChangedHandler(selectedImage)} /> */}
                    {/* <img id="target" />
                    <input type="file" id="select_image" name="image" onClick={readURL(this)} accept="Image/*" /> */}
                    {/* <input type="file" id="upload-button" onChange={handleChange} /> */}
                    {/* <button className="AddPhoto" onClick={handleUpload}>Add Photo</button> */}

                    <label className="AddPhoto">
                        <input type="file" onChange={handleChange} />Add Photo
                    </label>
                    
                </div>
            </div>
            {/* <!-- Progress bar --> */}
            {/* <br /> */}
            {/* <div className="progressbar">
                <div className="progress" id="progress"></div>
                <div className="progress-step progress-step-active"></div>
                <div className="progress-step"></div>
            </div> */}
        </div>
    )
};

export default Review;