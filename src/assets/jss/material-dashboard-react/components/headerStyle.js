import {
    hexToRgb,
    drawerWidth,
    container,
    defaultFont,
    primaryColor,
    defaultBoxShadow,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    whiteColor,
    grayColor,
    boxShadow,
    primaryBoxShadow,

    blackColor
  } from "assets/jss/material-dashboard-react.js";

  
  const headerStyle = (theme) => ({
      appBar: {
          background: whiteColor,
          // boxShadow:"rgb(0 0 0 / 6%) 0px 5px 5px -3px, rgb(0 0 0 / 4%) 0px 8px 10px 1px, rgb(0 0 0 / 4%) 0px 3px 14px 2px",
          position: "fixed",
          width: `calc(100% - ${drawerWidth}px)`,
       
          color: grayColor[7], 
          border: "0",
         
         zIndex:"1034",
          transition: "all 150ms ease 0s",
          Height: "50px",
          display: "block",
          
      },
      toolbar:{
     
        display: "flex",
        justifyContent: "space-between",
        color: blackColor,
      },
      icons :{
        alignItems: "center",
        display:  "flex",
        cursor: "pointer"

      },
      badge:{
        marginRight: theme.spacing(2),
       
      },

      popperClose: {
        pointerEvents: "none",
      },
      popperResponsive: {
        [theme.breakpoints.down("md")]: {
          zIndex: "1640",
          position: "static",
          float: "none",
          width: "auto",
          marginTop: "0",
          backgroundColor: "transparent",
          border: "0",
          WebkitBoxShadow: "none",
          boxShadow: "none",
          color: "black",
        },
      },
      popperNav: {
        [theme.breakpoints.down("sm")]: {
          position: "static !important",
          left: "unset !important",
          top: "unset !important",
          transform: "none !important",
          willChange: "unset !important",
          "& > div": {
            boxShadow: "none !important",
            marginLeft: "0rem",
            marginRight: "0rem",
            transition: "none !important",
            marginTop: "0px !important",
            marginBottom: "0px !important",
            padding: "0px !important",
            backgroundColor: "transparent !important",
            "& ul li": {
              color: whiteColor + " !important",
              margin: "10px 15px 0!important",
              padding: "10px 15px !important",
              "&:hover": {
                backgroundColor: "hsla(0,0%,78%,.2)",
                boxShadow: "none",
              },
            },
          },
        },
      },
      dropdown: {
        borderRadius: "3px",
        border: "0",
        boxShadow: "0 2px 5px 0 rgba(" + hexToRgb(blackColor) + ", 0.26)",
        top: "100%",
        zIndex: "1000",
        minWidth: "160px",
        padding: "5px 0",
        margin: "2px 0 0",
        fontSize: "14px",
        textAlign: "left",
        listStyle: "none",
        backgroundColor: whiteColor,
        WebkitBackgroundClip: "padding-box",
        backgroundClip: "padding-box",
      },

    dropdownItem: {
        ...defaultFont,
        fontSize: "13px",
        padding: "10px 20px",
        margin: "0 5px",
        borderRadius: "2px",
        WebkitTransition: "all 150ms linear",
        MozTransition: "all 150ms linear",
        OTransition: "all 150ms linear",
        MsTransition: "all 150ms linear",
        transition: "all 150ms linear",
        display: "block",
        clear: "both",
        fontWeight: "400",
        lineHeight: "1.42857143",
        color: grayColor[8],
        whiteSpace: "nowrap",
        height: "unset",
        minHeight: "unset",
        "&:hover": {
          backgroundColor: primaryColor[0],
          color: whiteColor,
          ...primaryBoxShadow,
        },
      },
      navLinkContainer: {
        display: "flex",
       
      },
      navLink:{
        textDecoration: 'none' ,

      },
      navLinkText:{
      
        fontSize: "18px",
        color: "#000"
      }
  })

  export default headerStyle
  