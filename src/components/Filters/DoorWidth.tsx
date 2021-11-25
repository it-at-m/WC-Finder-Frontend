import { MenuItem, makeStyles, TextField } from "@material-ui/core";
import React, { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
//import L from "leaflet"
// import App from "../../App"
//import { loadAllPlace } from "../../store/actions/places";
//import { Place } from "./store/models";
//import { data } from "../../data";
//import { useDispatch } from "react-redux";
import { useActions } from "../../hooks/useActions";

const useStyles = makeStyles({
  root: {
    height: 44,
    width: 80,
    backgroundColor: "#ffffff",
    borderRadius: 25,
    fontSize: 15,
    lineHeight: 0.01,
    textDecoration: "none",
    outline: "none",
    textAlign: "center",
    fontFamily: "Barlow",
    "& .MuiOutlinedInput-input": {
      color: "black",
      fontFamily: "Barlow",
    },
    "& .MuiInputLabel-root": {
      color: "black",
      fontFamily: "Barlow",
    },
    "& .makeStyles-selectBox-3": {
      width: "auto",
      height: 44,
      outline: "none",
      zIndex: 1000,
      fontSize: 19,
      textAlign: "start",
      fontFamily: "Barlow",
      borderRadius: 30,
      textTransform: "none",
      backgroundColor: "#ffffff",
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
      fontFamily: "Barlow",
      lineHeight: 0.01,
    },
    "& .MuiInput-root": {
      position: "static",
    },
    "& .makeStyles-root-1 .MuiFormLabel-root": {
      color: "#000000",
      padding: 0,
      fontSize: 19,
      fontFamily: "Barlow",
      lineHeight: 0.01,
    },
    "& .MuiInputBase-root": {
      color: "#000000",
      cursor: "text",
      display: "inline-flex",
      position: "relative",
      fontSize: 19,
      //boxSizing: border-box;
      alignItems: "center",
      fontFamily: '"Barlow","Barlow","Barlow",Barlow',
      //fonteight: 400;
      //  line-height: 1.1876em;
      //letter-spacing: 0.00938em;
    },
    "& .MuiInputLabel-shrink": {
      transform: "translate(1px, 10px) scale(0.80)",
      transformOrigin: "top center",
    },
    "& .MuiButton-label": {
      width: "100%",
      display: "contents",
      alignItems: "inherit",
      justifyContent: "inherit",
      fontSize: "60%",
    },
  },
  all: {
    justifyContent: "center",
    display: "flex",
    fontFamily: "Barlow",
  },
  selectWrapper: {
    borderRadius: 50,
    zIndex: 1000,
    display: "flex",
    border: "none",
    width: "auto",
    height: 44,
    fontFamily: "Barlow",
    // overflow:"hidden",
    // backgroundColor:"#cccccc",
    // border:"1 solid #cccccc"
  },
  selectBox: {
    height: 44,
    width: "auto",
    color: "#000000",
    padding: 0,
    fontSize: "85%",
    fontFamily: "Barlow",
    backgroundColor: "#ffffff",
    borderRadius: 25,
    lineHeight: 0.1,
    textDecoration: "none",
    outline: "none",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#ffffff",
    },
  },
});

export default function DoorWidthFunction() {
  // For styling
  const classes = useStyles();

  // all states
  const [euroKey, setEuroKey] = useState<number>(2);
  const [doorWidth, setDoorWidth] = useState<number>(0);
  const [rampVal, setRampVal] = useState<number>(0);
  const isMounted = useRef(false);

  const { listPlacesFilter } = useActions();

  useEffect(() => {
    if (isMounted.current) {
      listPlacesFilter({
        EuroKey: euroKey,
        DoorWidth: doorWidth,
        Ramp: rampVal,
      });
    } else {
      isMounted.current = true;
    }
  }, [euroKey, doorWidth, rampVal]);

  // For Euro Key
  function handleSelect(e) {
    setEuroKey(e.target.value);
  }

  // For Door Width
  function handleSelectDoorWidth(f) {
    setDoorWidth(f.target.value);
    localStorage.setItem("DoorWidth", f.target.value);
  }

  // For Ramp
  function handleRamp(g) {
    setRampVal(g.target.value);
  }

  // For Clear Functionality
  const clearAll = () => {
    setEuroKey(2);
    setDoorWidth(0);
    setRampVal(0);
  };

  return (
    <div className={classes.all}>
      <div className={classes.selectWrapper}>
        <TextField
          className={classes.root}
          label="Euro key"
          value={euroKey}
          onChange={(e) => handleSelect(e)}
          id="EuroKey"
          placeholder="Euro Key"
          // onClick= {L.geoJSON(res).addTo('map')}
          select
        >
          <MenuItem id="None" value={2}></MenuItem>
          <MenuItem id="EuroKeyYes" value={1}>
            Yes
          </MenuItem>
          <MenuItem id="EuroKeyNo" value={0}>
            No
          </MenuItem>
        </TextField>
      </div>
      <div className={classes.selectWrapper}>
        <TextField
          className={classes.root}
          value={doorWidth}
          onChange={(f) => handleSelectDoorWidth(f)}
          label="Door width"
          id="DoorWidth"
          select
        >
          <MenuItem id="NoneDoor" value={150}></MenuItem>
          <MenuItem id="Door1" value={80}>
            80cm
          </MenuItem>
          <MenuItem id="Door2" value={100}>
            100cm
          </MenuItem>
          <MenuItem id="Door3" value={120}>
            120cm
          </MenuItem>
          <MenuItem id="Door4" value={150}>
            150cm
          </MenuItem>
        </TextField>
      </div>
      <div className={classes.selectWrapper}>
        <TextField
          className={classes.root}
          id="Ramp"
          value={rampVal}
          onChange={handleRamp}
          label="Ramp"
          select
        >
          <MenuItem value={0}></MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
        </TextField>
      </div>
      <div className={classes.selectWrapper}>
        <Button className={classes.selectBox}>More filters</Button>
      </div>
      <div className={classes.selectWrapper}>
        <Button className={classes.selectBox} onClick={clearAll}>
          Clear filters
        </Button>
      </div>
    </div>
  );
}