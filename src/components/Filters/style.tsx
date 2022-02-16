import { makeStyles } from "@material-ui/core";
export default makeStyles({
    root: {
      height: "auto",
      minWidth: "6vw",
      backgroundColor: "#ffffff",
      borderRadius: 36,
      lineHeight: 0.1,
      textDecoration: "none",
      outline: "none",
      textAlign: "center",
      fontFamily: "Barlow",
      borderWidth: "1px",
      textTransform:"none",
      boxShadow: "rgb(0 0 0 / 30%) 0px 1px 3px 0px, rgb(27 31 35 / 10%) 0px 0px 0px 1px",
      "&:hover": {
        backgroundColor: "#ffffff"
     },
      "& .MuiOutlinedInput-input": {
        color: "black",
        fontFamily: "Barlow",
      },
      "& .MuiInputLabel-root": {
        color: "black",
        fontFamily: "Barlow",
      },
      "& .MuiSelect-selectMenu":{
        lineHeight: 1
      },
      "& .makeStyles-selectBox-3": {
        width: "auto",
        height: 36,
        outline: "none",
        zIndex: 1000,
        textAlign: "start",
        fontFamily: "Barlow",
        borderRadius: 30,
        textTransform: "none",
        backgroundColor: "#ffffff",
      },
      "& .makeStyles-selectWrapper-3": {
        width: "auto",
        border: "none",
        height: 32,
        display: "flex",
        zIndex: 1000,
        marginRight: 5,
        borderRadius: 50
    },
    "& .makeStyles-selectWrapper-15": {
      width: "auto",
      border: "none",
      height: 32,
      display: "flex",
      zIndex: 1000,
      marginRight: 5,
      borderRadius: 50
  },
      "& .MuiButton-text": {
        padding: "0px 4px"
    },
       "& .MuiInputLabel-formControl": {
         /* top: 0; */
         /* left: 0; */
         /* position: fixed; */
       },
      "& .MuiFormLabel-root": {
        color: "#000000",
        padding: 0,
        fontFamily: "Barlow",
        lineHeight: 0.1,
      },
      "& .MuiInput-root": {
        position: "static",
      },
      "& .makeStyles-root-1 .MuiInputLabel-shrink": {
        transform: "translate(3px, 12px) scale(1.10)",
        transformOrigin: "top",
        '@media (min-width:600px)': {
          fontSize: '50rem',
        },
    },
    "& .MuiPaper-root": {
      top: 134,
      color: "rgba(0, 0, 0, 0.87)",
      /* transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; */
      backgroundColor: "#fff"
  },
      "& .makeStyles-root-1 .MuiFormLabel-root": {
        color: "#000000",
        padding: 0,
        fontFamily: "Barlow",
        lineHeight: 0.01,
      },
      "& .MuiInputBase-root": {
        color: "#000000",
        cursor: "text",
        display: "inline-flex",
        position: "relative",
        alignItems: "center",
        fontFamily: '"Barlow","Barlow","Barlow",Barlow'
      },
      "& .MuiInputLabel-shrink": {
        transform: "translate(8px, 12px) scale(1.00)",
        transformOrigin: "top center",
      },
      "& .MuiButton-label": {
        width: "100%",
        display: "contents",
        alignItems: "inherit",
        justifyContent: "inherit",
      },
      "& .MuiSelect-select.MuiSelect-select": {
        paddingRight: 19,
        paddingLeft: 10,
        "&:after":{
          borderColor: "#000000"
        },
    }
    },
    all: {
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
      height: 32,
      fontFamily: "Barlow",
      marginRight:5,
      color: "black"
    },
    rightSideBar: {
      height: "100%",
      width: "35%",
      zIndex: 1000,
      "@media (max-width: 768px)": {
            width: "80%",
            height: "50%",
            top: "50%"
          }
        },
    EuroKey: {
      zIndex:1000,
      position: "absolute"
    },
    menuitem: {
      borderWidth: 10
    }
  });