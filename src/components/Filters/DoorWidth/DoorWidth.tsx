/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {
    MenuItem, 
    makeStyles,
    TextField
} from '@material-ui/core';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import zIndex from '@material-ui/core/styles/zIndex';
import "./DoorWidth.css"
const useStyles = makeStyles({
  // root: { height:54,
  //   width:160,
  //   backgroundColor: "#ffffff",
  //   borderRadius: 50,
  //   fontSize: 17,
  //     "& .MuiOutlinedInput-input": {
  //       color: "green"
  //     },
  //     "& .MuiInputLabel-root": {
  //       color: "green"
  //     },
  //     "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
  //       borderColor: "green"
  //     },
  //     "&:hover .MuiOutlinedInput-input": {
  //       color: "red"
  //     },
  //     "&:hover .MuiInputLabel-root": {
  //       color: "red"
  //     },
  //     "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
  //       borderColor: "red"
  //     },
  //     "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
  //       color: "purple"
  //     },
  //     "& .MuiInputLabel-root.Mui-focused": {
  //       color: "purple"
  //     },
  //     "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
  //       borderColor: "purple"
  //     },
  //     ".makeStyles-root-1": {
  //       width: 98,
  //       height: 44,
  //       borderRadius: "40%",
  //       backgroundColor: "#ffffff"
  //     }
  //   },
  //   Value: {
  //     display: "flex",
  //     // padding: 5,
  //     zIndex: 1000,
  //     height: 56,
  //     width: 100,
  //     padding:5
  //   },
  //   btns:{
  //     display: "flex",
  //     borderColor: "purple",
  //     padding: 5,
  //     height:56,
  //     width: 80,
  //     backgroundColor: "#ffffff",
  //     zIndex:1000,
  //     '&:hover': {
  //       backgroundColor: "#ffffff"
  //     }
  //   },
    all:{
      justifyContent: "center",
      display:"flex",
      padding: 5,
      },
    
    selectWrapper: {
      borderRadius:50,
      zIndex: 1000,
      display:"flex",
      border: "none",
      // overflow:"hidden",
      // backgroundColor:"#cccccc",
      // border:"1 solid #cccccc"
    },
    selectBox: {
      width:"auto",
      height:44,
      zIndex: 1000,
      borderRadius:50,
      outline:"none",
      textAlign: "center",
      backgroundColor: "#ffffff",
      fontSize:17,
      fontFamily: "SF-PRO",
      textTransform:"none",
      '&:hover': {
               backgroundColor: "#ffffff"
             }
    },
    // "@media(maxWidth:540px)": {
    //   display: "flex",
    //   flexDirection: 'row',
    //   alignItems: 'flexStart',
    //   flexWrap: "nowrap",
    //   overflowX: "scroll",
    //   width: "auto"
    //   },
    
    }
    // newa: {
    //   borderRadius:36,
    //   display:"inline-block",
    //   overflow:"hidden",
    //   // background:"#ffffff";
    //   // border:"1px solid #cccccc",
    //   height:20,
    //   width:20,
    //   backgroundColor: "#ffffff",
    // // borderRadius: 50,
    // // borderStyle:"none",
    //   fontSize: 17,
    //   zIndex: 1000,
    //   "& >select":{
    //     width:140,
    //     height:40,
    //     border:0,
    //     outline:"none"
    //   }
    // }


);

export default function DoorWidthFunction() {
    const [value, setValue] = useState('');
    //const [key,setKey]=useState('');
    const classes = useStyles();
    function handleSelect(e){
      setValue(e.value)
    }

    return (
      <div className={classes.all}>
        <div className={classes.selectWrapper}>
        <select className={classes.selectBox}>
          <option value={0} onClick={handleSelect}>&nbsp;&nbsp;Euro key&nbsp;&nbsp;</option>
          <option value={1} onClick={handleSelect}>Yes</option>
          <option value={0} onClick={handleSelect}>No</option>
        </select>
      </div>
      <div className={classes.selectWrapper}>
        <select className={classes.selectBox}>
          <option value={150}>&nbsp;&nbsp;Door width&nbsp;&nbsp;</option>
          <option value={80} onClick={handleSelect}>80cm</option>
          <option value={100} onClick={handleSelect}>100cm</option>
          <option value={120} onClick={handleSelect}>120cm</option>
          <option value={150} onClick={handleSelect}>150cm</option>
        </select>
      </div>
      <div className={classes.selectWrapper}>
        <select className={classes.selectBox} onClick={handleSelect}>
          <option value="Ramp">&nbsp;&nbsp;Ramp&nbsp;&nbsp;</option>
          <option value={10} >10</option>
          <option value={20} >20</option>
          <option value={30} >30</option>
          <option value={40} >40</option>
        </select>
      </div>
          {/* <TextField
            className={classes.root}
            // value={value}
            // onChange={handleSelect}
            // variant="outlined"
            label="Min Door Width"
            key="DoorWidth"
            select
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={80}>80cm</MenuItem>
            <MenuItem value={100} >100cm</MenuItem>
            <MenuItem value={120} >120cm</MenuItem>
            <MenuItem value={150} >150cm</MenuItem>
          </TextField>
        </div> */}
        {/* <div className={classes.Value}>
          <TextField
            className={classes.root}
            // value={value}
            // onChange={handleSelect}
            // variant="outlined"
            label="Euro Key"
            key={"EuroKey"}
            select
          >
            <MenuItem value="" >
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Yes</MenuItem>
            <MenuItem value={0}>No</MenuItem>
          </TextField>
        </div> */}
        {/* <div className={classes.Value}>
        <TextField
          className={classes.root}
          // value={value}
          // onChange={handleSelect}
          // variant="outlined"
          label="Max Ramp Inclination"
          key={"Ramp"}
          select
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
        </TextField>
        </div> */}
        <div className={classes.selectWrapper}>
          <Button variant="outlined" className={classes.selectBox}> 
          More filters
          </Button>
        </div>
        <div className={classes.selectWrapper}>
          <Button variant="outlined" className={classes.selectBox} >
          Clear filters
          </Button>
        </div>
      </div>
    );
}