/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from "react";
import {useActions} from "../../hooks/useActions";
import "./Review.css";
import { useSelector } from "../../hooks/useTypedSelector";
import thanks from "../Tabs/icons/Thanks.png"
import sad_image from "../Tabs/icons/SadFace.png"
import neutral_image from "../Tabs/icons/NuetralFace.png"
import happy_image from "../Tabs/icons/HappyFace.png"

const Review = () => {
    const formSteps = document.querySelectorAll(".form-step");
    const progressSteps = document.querySelectorAll(".progress-step");
    let [formStepsNumNext, setformStepsNumNext] = useState(0);
    let [selectedValue,setSelectedValue] = useState('');
    let [cleanVal,setCleanVal]=useState('');
    let [location, setlocation]=useState('');
    let [photos, setPhotos] = useState('');
    let [accuracy, setAccuracy]=useState('');

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

    const reset = (e) =>{
        setState({ ...initialState });
        setSelectedValue('')
        setCleanVal('')
        setPhotos('')
        setAccuracy('')
        setlocation('')
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
        progressSteps[formStepsNumNext].classList.add("progress-step-active");
        progressSteps[formStepsNumNext + 1].classList.remove("progress-step-active");
    }

    function updateNext() {
        formSteps[formStepsNumNext].classList.add("form-step-active");
        formSteps[formStepsNumNext - 1].classList.remove("form-step-active");
        console.log("2. Update ",formStepsNumNext);
        if(formStepsNumNext<4){
            progressSteps[formStepsNumNext].classList.add("progress-step-active");
        }
    }


    const initialState = {
        Experience: 0,
        Clean: 0,
        locate: 2,
        photo: 2,
        accurate: 2,
        moreinfo: ""
    };


    const [{ Experience, Clean, locate, photo, accurate, moreinfo }, setState] = useState(initialState);

    // const clearState = () => {
    //     setState({ ...initialState });
    // };

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
            moreExperience: moreinfo
        });
        nextBtns();
    }

    return (
        <div>
            {/* <!-- Progress bar --> */}

            <div className="progressbar">
                <div className="progress" id="progress"></div>

                <div
                    className="progress-step progress-step-active"
                ></div>
                <div className="progress-step"></div>
                <div className="progress-step"></div>
                <div className="progress-step"></div>
            </div>

            {/* <!-- Steps --> */}
            <div className="form-step form-step-active">
            <h3>How was your experience?</h3>
            <br/>
            <div className="RadioButton" onChange={(e) => onChange(e)}>
                {/* <label className="Text"> */}
                <label>
                    <input type="radio" name="Experience" onChange={optionSelectedExperience} checked={selectedValue==='1'} id="ExpGood" value={1}/>
                    <img src={sad_image} alt="I'm sad" />
                </label>
                    {/* Good</label> */}
                {/* <label className="Text"> */}
                <label>
                    <input type="radio" name="Experience" onChange={optionSelectedExperience} checked={selectedValue==='2'} id="ExpNeutral" value={2}/>
                    <img src={neutral_image} alt="I'm neutral" />
                </label>
                    {/* Neutral</label> */}
                {/* <label className="Text"> */}
                <label>
                    <input type="radio" name="Experience" onChange={optionSelectedExperience} checked={selectedValue==='3'} id="ExpSad" value={3}/>
                    <img src={happy_image} alt="I'm happy" />
                </label>
                    {/* Sad</label> */}
            </div>
            <br/>
            <button className="btn btn-next" onClick={nextBtns}>Next</button>
            </div>
            <div className="form-step">
            <h3>Was the toilet clean?</h3>
            <br/>
            <div className="RadioButton" onChange={(e) => onChange(e)}>
                <label> {/* className="Text"> */}
                    <input type="radio" name="Clean" id="CleanGood" onChange={optionSelectedClean} checked={cleanVal==='1'} value={1}/>
                    <img src={sad_image} alt="I'm sad" />
                </label>
                <label>{/* className="Text"> */}
                    <input type="radio" name="Clean" id="CleanNeutral" onChange={optionSelectedClean} checked={cleanVal==='2'} value={2}/>
                    <img src={neutral_image} alt="I'm neutral" />    
                </label>
                <label>{/* className="Text"> */}
                    <input type="radio" name="Clean" id="CleanSad"  onChange={optionSelectedClean} checked={cleanVal==='3'} value={3}/>
                    <img src={happy_image} alt="I'm happy" />    
                </label>
            </div>
            <br/>
            <div className="Buttons">
                <button className="btn btn-prev" onClick={prevBtns}>Back</button>
                <button className="btn btn-next" onClick={nextBtns}>Next</button>
            </div>
            </div>
            <div className="form-step">
            <h3>Did you find the toilet easily?</h3>
            <div className="RadioButton" onChange={(e) => onChange(e)}>
                <label className="Text">
                    <input type="radio" name="locate" id="Found" onChange={optionSelectedLocate} checked={location==='1'} value={1}/>Yes</label>
                <label className="Text">
                    <input type="radio" name="locate" id="NotFound" onChange={optionSelectedLocate} checked={location==='0'} value={0}/>No</label>
            </div>
            <h3>Were the photos helpful?</h3>
            <div className="RadioButton" onChange={(e) => onChange(e)}>
                <label className="Text">
                    <input type="radio" name="photo" id="PhotosUseful" onChange={optionSelectedPhoto} checked={photos==='1'} value={1}/>Yes</label>
                <label className="Text">
                    <input type="radio" name="photo" id="PhotosNotUseful" onChange={optionSelectedPhoto} checked={photos==='0'} value={0}/>No</label>
            </div>
            <h3>Were the information accurate?</h3>
            <div className="RadioButton" onChange={(e) => onChange(e)}>
                <label className="Text">
                    <input type="radio" name="accurate" id="AccurateInfo" onChange={optionSelectedAccurate} checked={accuracy==='1'} value={1}/>Yes</label>
                <label className="Text">
                    <input type="radio" name="accurate" id="NotAccurateInfo" onChange={optionSelectedAccurate} checked={accuracy==='1'} value={0}/>No</label>
            </div>
            <div className="Buttons">
                <button className="btn btn-prev" id="Previous" onClick={prevBtns}>Back</button>
                <button className="btn btn-next" id="Next" onClick={nextBtns}>Next</button>
            </div>
            </div>
            <div className="form-step">
            <div className="ShortText" onChange={(e) => onChange(e)}>
                <label>Can you tell us a little more about your experience? (optional)</label><br/>
                <textarea name="moreinfo" className="Paragraph" id="output"
                          placeholder="Type your content here" value={moreinfo}></textarea>
            </div>
            <br/>
            <div className="Buttons-End">
                <button className="btn btn-prev" onClick={prevBtns}>Back</button>
                <button className="btn Submit btn-next" onClick={handleSubmit}>Submit</button>
                <button id="clear" className="btn Cancel" onClick={reset}>Clear</button>
                
            </div>
            </div>
            <div className="form-step">
            <h3 className="Thankyou">Thanks for your feedback</h3>
            <br />
            <h4 className="Thankyou">Your feedback would help us <br /> improve our service</h4>
            <img src={thanks} alt="Thankyou" />
            </div>
        </div>
    )
};

export default Review;