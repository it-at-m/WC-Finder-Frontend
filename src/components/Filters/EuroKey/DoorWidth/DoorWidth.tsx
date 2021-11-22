import {
    MenuItem, 
    makeStyles,
    TextField
} from '@material-ui/core';
import React,{useState} from 'react';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: { height:44,
    width:75,
    backgroundColor: "#ffffff",
    borderRadius: 25,
    fontSize: 15,
    lineHeight:0.01,
    textDecoration:"none",
    outline:"none",
    textAlign: "center",
    fontFamily: "SF-PRO Display",
      "& .MuiOutlinedInput-input": {
        color: "black",
        fontFamily: "SF-PRO Display",
      },
      "& .MuiInputLabel-root": {
        color: "black",
        fontFamily: "SF-PRO Display",
      },
      "& .makeStyles-selectBox-3": {
        width: "auto",
        height: 44,
        outline: "none",
        zIndex: 1000,
        fontSize: 19,
        textAlign: "start",
        fontFamily: "SF-PRO Display",
        borderRadius: 30,
        textTransform: "none",
        backgroundColor: "#ffffff"
      },
      "& .MuiInputLabel-formControl": {
      /* top: 0; */
      /* left: 0; */
      /* position: fixed; */
      },
      "& .MuiFormLabel-root": {
        color: "#000000", 
        padding: 0,
        fontSize: 15,
        fontFamily: "SF-PRO Display",
        lineHeight: 0.01
      },
      "& .MuiInput-root": {
        position: "static"
      },
      "& .makeStyles-root-1 .MuiFormLabel-root": {
        color: "#000000",
        padding: 0,
        fontSize: 19,
        fontFamily: "SF-PRO Display",
        lineHeight: 0.01
       },
      "& .MuiInputBase-root": {
        color: "#000000",
        cursor: "text",
        display: "inline-flex",
        position: "relative",
        fontSize: 19,
        //boxSizing: border-box;
        alignItems: "center",
        fontFamily: '"SF-PRO Display","SF-PRO Display","SF-PRO Display",SF-PRO Display'
        //fonteight: 400;
        //  line-height: 1.1876em;
        //letter-spacing: 0.00938em;
      },
      "& .MuiInputLabel-shrink": {
        transform: "translate(1px, 10px) scale(0.80)",
        transformOrigin: "top center"
      },
    },
    all:{
      justifyContent: "center",
      display:"flex",
      fontFamily: "SF-PRO Display",
      },
    selectWrapper: {
      borderRadius:50,
      zIndex: 1000,
      display:"flex",
      border: "none",
      width:"auto",
      height: 44,
      fontFamily: "SF-PRO Display"
      // overflow:"hidden",
      // backgroundColor:"#cccccc",
      // border:"1 solid #cccccc"
    },
    selectBox: {
      height:44,
      width:"auto",
      color: "#000000", 
      padding: 0,
      fontSize: 15,
      fontFamily: "SF-PRO Display",
      backgroundColor: "#ffffff",
      borderRadius: 25,
      lineHeight:0.1,
      textDecoration:"none",
      outline:"none",
      textTransform:"none",
      '&:hover': {
        backgroundColor: "#ffffff"
      }
    },
    }
);

export default function DoorWidthFunction() {
 // For styling
  const classes = useStyles();

  // For Euro Key
  const [data,setData]=useState(-1)
  function handleSelect(e){
    setData(e.target.value)
    // merge()
    const currentState = {payload : {"EuroKey": e.target.value}};
    console.log(currentState.payload)
    handleSubmit(currentState.payload)
  }

  // For Door Width
  const [DoorWidth,setDoorWidth]=useState(0)
  function handleSelectDoorWidth(f){
    setDoorWidth(f.target.value)
    //merge()
    const currentState = {payload : {"DoorWidth": f.target.value}};
    console.log(currentState.payload)
    handleSubmit(currentState.payload)
  }

  // For Ramp 
  const [RampVal,setRampVal]=useState(0)
  function handleRamp(g){
    setRampVal(g.target.value)
    //merge()
    const currentState = {payload : {"Ramp": g.target.value}};
    console.log(currentState.payload)
    handleSubmit(currentState.payload)
  }

  // For Clear Functionality 
  const clearAll = () => {
    setData(-1)
    setDoorWidth(0)
    setRampVal(0)
  }

  //For sending data to backend
  function handleSubmit(event) {
    //event.preventDefault();
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(event),
    };
    console.log();
    console.log(JSON.stringify(event));
    return fetch(
        "https://toilets1-4v3wnsvvhq-lm.a.run.app/filter/",
        requestOptions
    )
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Connection failed.");
            }
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error.message);
        });
}
  return (
      <div className={classes.all}>
        <div className={classes.selectWrapper}>
        <TextField
            className={classes.root}
            // value={defaultValue}
            // onChange={useInput(defaultValue).onChange}
            // variant="outlined"
            label="Euro key"
            value={data}
            onChange={(e)=>handleSelect(e)}
            //defaultValue={"Yes"}
            id="EuroKey"
            placeholder="Euro Key"
            // select
            select
          >
            <MenuItem id="None" value={1} >
              None
            </MenuItem>
            <MenuItem id="EuroKeyYes" value={1}>Yes</MenuItem>
            <MenuItem id="EuroKeyNo" value={0}>No</MenuItem>
          </TextField>
        </div>
        <div className={classes.selectWrapper}>
        <TextField
            className={classes.root}
            // value={defaultValueDoor}
            // onChange={useInputDoor(defaultValueDoor).onChange}
            // // value={selectedColumns.levels[0]}
            value={DoorWidth}
            onChange={f => handleSelectDoorWidth(f)}
            
            // onChange={handleChange2}
            // variant="outlined"
            label="Door width"
            id="DoorWidth"
            // onChange={(e)=>handleSelect(e)}
            // value={data}
            //defaultValue={'0'}
            select
            // onSelect={(e)=>handleSelect(e)}
          >
            <MenuItem id="NoneDoor" value="">
            <em>None</em>
          </MenuItem>
            <MenuItem id="Door1" value={80}>80cm</MenuItem>
            <MenuItem id="Door2" value={100} >100cm</MenuItem>
            <MenuItem id="Door3" value={120} >120cm</MenuItem>
            <MenuItem id="Door4" value={150} >150cm</MenuItem>
          </TextField>
        </div>
        <div className={classes.selectWrapper}>
        <TextField
          className={classes.root}
          // value={defaultValueRamp}
          // onChange={useInputRamp(defaultValueRamp).onChange}
          id="Ramp"
          // onChange={(e)=>handleSelect(e)}
          // value={data}
          // value={selectedColumns.levels[2]}
          //   onChange={e => handleChange(e, 2)}
          value={RampVal}
          onChange={handleRamp}
          // variant="outlined"
          label="Ramp"
          //defaultValue={'0'}
          select
          // onSelect={(e)=>handleSelect(e)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='10'>10</MenuItem>
          <MenuItem value='20'>20</MenuItem>
          <MenuItem value='30'>30</MenuItem>
          <MenuItem value='40'>40</MenuItem>
        </TextField>
        </div>
        <div className={classes.selectWrapper}>
          <Button variant="outlined" className={classes.selectBox}> 
          More filters
          </Button>
        </div>
        <div className={classes.selectWrapper}>
          <Button variant="outlined" className={classes.selectBox} onClick={clearAll}>
          Clear filters
          </Button>
        </div>
      </div>
    );
}