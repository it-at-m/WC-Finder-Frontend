/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect, useRef, useState} from "react";
import {useActions} from "../../hooks/useActions";
import "./Review.css";

const Review = () => {
    const formSteps = document.querySelectorAll(".form-step");
    const progressSteps = document.querySelectorAll(".progress-step");
    let [formStepsNumNext,setformStepsNumNext] = useState(0);

    const {ReviewPlace} = useActions();

    function nextBtns() {
        formStepsNumNext++;
        setformStepsNumNext(formStepsNumNext);
        updateFormSteps();
        // console.log("3. Back before Update ",formStepsNumNext);
        updateProgressbar();
    }

    function prevBtns() {
        formStepsNumNext--;
        setformStepsNumNext(formStepsNumNext);
        updateFormSteps();
        // console.log("3. Back before Update ",formStepsNumNext);
        updateProgressbar();
    }

function updateFormSteps() {
    
     console.log(formStepsNumNext)
  formSteps.forEach((formStep) => {
    console.log("2. Update ",formStepsNumNext);
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

    formSteps[formStepsNumNext].classList.add("form-step-active");
}

    function updateProgressbar() {
        progressSteps.forEach((progressStep, idx) => {
            if (idx < formStepsNumNext + 1) {
                progressStep.classList.add("progress-step-active");
            } else {
                progressStep.classList.remove("progress-step-active");
            }
        });

    }

//Experience 
    const [Experience, setExperience] = useState<number>(0);

    function handleExperience(e) {
        setExperience(e.target.value);
    }

//Clean
    const [Clean, setClean] = useState<number>(0);

    function handleClean(e) {
        setClean(e.target.value);
    }

//Location
    const [locate, setLocate] = useState<number>(2);

    function handleLocate(e) {
        setLocate(e.target.value);
    }

//Photo
    const [photo, setphoto] = useState<number>(2);

    function handlePhoto(e) {
        setphoto(e.target.value);
    }

//Accurate
    const [accurate, setAccurate] = useState<number>(2);

    function handleAccurate(e) {
        setAccurate(e.target.value);
    }

//More Information
    const [moreinfo, setMoreInfo] = useState<string>("");

    function handleMore(e) {
        setMoreInfo(e.target.value);
    }

//More Information

    function handleSubmit() {

        ReviewPlace({
            id: 0,
            experience: Experience,
            clean: Clean,
            findToilet: locate,
            photosUseful: photo,
            infoAccurate: accurate,
            moreExperience: moreinfo
        });
    }


// // Submit
// const isMounted = useRef(false);
//
//   useEffect(() => {
//     if (isMounted.current) {
//       ReviewPlace({
//         id: 0,
//         experience: Experience,
//         clean: Clean,
//         findToilet: locate,
//         photosUseful: photo,
//         infoAccurate: accurate,
//         moreExperience: moreinfo
//       });
//     } else {
//       isMounted.current = true;
//     }
//     console.log([Experience,Clean,locate,photo,accurate,moreinfo]);
//     // eslint-disable-next-line
//   }, []);

    // Clear Button
    // function Clear()
    // {
    //     const ClearBtn = document.getElementById('#clear');        
    //     const radioButtons = document.getElementsByName("choice-radio-1");
    //     // @ts-ignore: Object is possibly 'null'
    //     ClearBtn.addEventListener("click", () => {
    //             let selectedSize;
    //             for (const radioButton of radioButtons) {
    //                 if (radioButton.checked) {
                        
    //                 }
    //             }
    //         });
    // }

    // const Clear = () => {
    //     document.getElementById('#ExpGood')?.onreset()
    //     // setExperience(0);
    //     // setClean(0);
    //     // setAccurate(2);
    //     // setLocate(2);
    //     // setphoto(2);
    //     // setMoreInfo("");
    // }

    function clearForm() {
        function resetForm($input) {
            $input.find('input: textarea').val('');
            $input.find('input:radio')
                 .removeAttr('checked').removeAttr('selected');
        }
        
        resetForm('input[name=choice-radio-1]'); // by name
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
            <div className="RadioButton" onChange={(e) => handleExperience(e)}>
                <label className="Text">
                    <input type="radio"  name="choice-radio-1" id="ExpGood" value={1}/>Good</label>
                <label className="Text">
                    <input type="radio" name="choice-radio-1" id="ExpNeutral" value={2}/>Neutral</label>
                <label className="Text">
                    <input type="radio" name="choice-radio-1" id="ExpSad" value={3}/>Sad</label>
            </div>
            <br/>
            <button className="btn btn-next" onClick={nextBtns}>Next</button>
            </div>
            <div className="form-step">
            <h3>Was the toilet clean?</h3>
            <br/>
            <div className="RadioButton" onChange={(e) => handleClean(e)}>
                <label className="Text">
                    <input type="radio" name="choice-radio-2" id="CleanGood" value={1}/>Good</label>
                <label className="Text">
                    <input type="radio" name="choice-radio-2" id="CleanNeutral" value={2}/>Neutral</label>
                <label className="Text">
                    <input type="radio" name="choice-radio-2" id="CleanSad" value={3}/>Sad</label>
            </div>
            <br/>
            <div className="Buttons">
                <button className="btn btn-prev" onClick={prevBtns}>Back</button>
                <button className="btn btn-next" onClick={nextBtns}>Next</button>
            </div>
            </div>
            <div className="form-step">
            <h3>Did you find the toilet easily?</h3>
            <div className="RadioButton" onChange={(e) => handleLocate(e)}>
                <label className="Text">
                    <input type="radio" name="choice-radio-3" id="Found" value={1}/>Yes</label>
                <label className="Text">
                    <input type="radio" name="choice-radio-3" id="NotFound" value={0}/>No</label>
            </div>
            <h3>Were the photos helpful?</h3>
            <div className="RadioButton" onChange={(f) => handlePhoto(f)}>
                <label className="Text">
                    <input type="radio" name="choice-radio-4" id="PhotosUseful" value={1}/>Yes</label>
                <label className="Text">
                    <input type="radio" name="choice-radio-4" id="PhotosNotUseful" value={0}/>No</label>
            </div>
            <h3>Were the information accurate?</h3>
            <div className="RadioButton" onChange={(g) => handleAccurate(g)}>
                <label className="Text">
                    <input type="radio" name="choice-radio-5" id="AccurateInfo" value={1}/>Yes</label>
                <label className="Text">
                    <input type="radio" name="choice-radio-5" id="NotAccurateInfo" value={0}/>No</label>
            </div>
            <div className="Buttons">
                <button className="btn btn-prev" id="Previous" onClick={prevBtns}>Back</button>
                <button className="btn btn-next" id="Next" onClick={nextBtns}>Next</button>
            </div>
            </div>
            <div className="form-step">
            <div className="ShortText" onChange={(h) => handleMore(h)}>
                <label>Can you tell us a little more about your experience? (optional)</label><br/>
                <textarea name="paragraph_text" className="Paragraph" id="output"
                          placeholder="Type your content here"></textarea>
            </div>
            <br/>
            <div className="Buttons-End">
                <button className="btn btn-prev" onClick={prevBtns}>Back</button>
                <button className="btn Submit" onClick={handleSubmit}>Submit</button>
                <button id="clear" className="btn Cancel" onClick={clearForm}>Clear</button>
            </div>
            </div>
        </div>
    )
};

export default Review;