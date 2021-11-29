import { makeStyles } from "@material-ui/core";
export default makeStyles({
    root: {
      height: "auto",
      width: 90,
      backgroundColor: "#ffffff",
      borderRadius: 5,
      fontSize: 10,
      lineHeight: 0.1,
      textDecoration: "none",
      outline: "none",
      textAlign: "center",
      fontFamily: "Barlow",
      borderWidth: "1px",
      boxShadow: "rgb(0 0 0 / 30%) 0px 1px 3px 0px, rgb(27 31 35 / 10%) 0px 0px 0px 1px",

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
      "& .makeStyles-all-2": {
        display: "flex",
        fontFamily: "Barlow",
        marginTop: 5,
        justifyContent: "center"
    },
      "& .MuiFormLabel-root": {
        color: "#000000",
        padding: 0,
        fontSize: 15,
        fontFamily: "Barlow",
        lineHeight: 0.1,
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
        alignItems: "center",
        fontFamily: '"Barlow","Barlow","Barlow",Barlow'
      },
      "& .MuiInputLabel-shrink": {
        transform: "translate(13px, 12px) scale(1.10)",
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
      //justifyContent: "center space-between",
      justifyContent: "center",
      display: "flex",
      fontFamily: "Barlow",
      marginTop: 5,
    },
    selectWrapper: {
      borderRadius: 50,
      zIndex: 1000,
      display: "flex",
      border: "none",
      width: "auto",
      height: 44,
      fontFamily: "Barlow",
      marginRight:5
    },
    selectBox: {
      // height: 44,
      // width: "auto",
      // color: "#000000",
      // padding: 0,
      // fontSize: "95%",
      // fontFamily: "Barlow",
      // backgroundColor: "#ffffff",
      // borderRadius: 25,
      // lineHeight: 0.1,
      // textDecoration: "none",
      // outline: "none",
      // textTransform: "none",
      height: 44,
      width: 88,
      backgroundColor: "#ffffff",
      borderRadius: 5,
      fontSize: 13,
      fontWeight: 600,
      lineHeight: 0.1,
      textDecoration: "none",
      outline: "none",
      textAlign: "center",
      textTransform: "none",
      fontFamily: "Barlow",
      boxShadow: "rgb(0 0 0 / 30%) 0px 1px 3px 0px, rgb(27 31 35 / 10%) 0px 0px 0px 1px",

      "&:hover": {
        backgroundColor: "#ffffff",
      },
    },
  });