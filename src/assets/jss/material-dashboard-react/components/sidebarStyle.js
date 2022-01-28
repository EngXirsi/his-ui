
import {
    drawerWidth,
    transition,
    boxShadow,
    defaultFont,
    primaryColor,
    primaryBoxShadow,
    infoColor,
    successColor,
    warningColor,
    dangerColor,

    grayColor,
    blackColor,
    hexToRgb,
  
   
  
    whiteColor,
  } from "assets/jss/material-dashboard-react.js";
  
const sidebarStyle = (theme) =>({
    drawerPaper : {
        border: "none",
        position: "fixed",
        top:"0",
        left:"0",
        zIndex:"1",
        ...boxShadow,
        width: drawerWidth,
        [theme.breakpoints.up("md")]:{
            width: drawerWidth,
            height: "100%",
            position: "fixed"
        }
    },
    list :{
        marginTop: "20px",
        paddingLeft:"0",
        paddingTop:"0",
        paddingBottom: "0",
        marginBottom:"0",
        lineStyle: "none",
        possition: "unset"


    },
    item : {
        position : "relative",
        display : "block",
        textDecoration : "none",
        
        "&:hove , &:focus , &:visited , &":{
            color: whiteColor
        }
    },
    itemLink :{
        width :"auto",
        transition: "all 300ms linear",
       
        borderRadius: "10px",
        position: "relative",
        display : "flex",
    
        backgroundColor: "transparent",
        "&:hover,&:focus": {
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          borderRadius:"4px"
      
        },
        ...defaultFont
    },
    itemIcon :{
        width : "24px",
        height : "30px",
        fontSize : "24px",
        lineHeight : "30px",
        float : "left",
        marginRight : "10px",
        textAlign : "center",
        verticalAlign : "middle",
        color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)",

    },
    itemText :{
        ...defaultFont,
        margin:"0",
        lineHeight: "20px",
        fontSize: "14px",
        color: whiteColor
    },
   
    
    logo: {
        position: "relative",
        padding: "15px 15px",
        zIndex: "4",
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: "0",
    
          height: "1px",
          right: "15px",
          width: "calc(100% - 30px)",
          backgroundColor: "rgba(" + hexToRgb(grayColor[6]) + ", 0.3)",
        },
      },
      logoLink:{
        ...defaultFont,
        textTransform: "uppercase",
        padding: "5px 0",
        display: "block",
        fontSize: "18px",
        textAlign: "left",
        fontWeight: "400",
        lineHeight: "30px",
        textDecoration: "none",
        backgroundColor: "transparent",
        "&,&:hover": {
          color: whiteColor,
        },
    },

    logoImage:{

      width: "30px",
      display: "inline-block",
      maxHeight: "30px",
      marginLeft: "10px",
      marginRight: "15px",
    },
    img : {
        width:"35px",
        top: "22px",
        position:"absolute",
        verticalAlign:"middle",
        border: "0"
    },
    sidebarWrapper :{
        position:"relative",
        height: "calc(100vh - 75px)", 
        overflow:"auto",
        width: drawerWidth,
        zIndex: "4",
        overflowScrolling: "touch",
    },
    background:{
        position:"absolute",
        zIndex: "1",
        height: "100%",
        width: "100%",
        display:"block",
        top: "0",
        left: "0",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRapeats: "no-repeat",
        "&:after" : {
            position: "absolute",
            zIndex: "3",
            width:"100%",
            height:"100%",
            content : '""',
            display: "block",
            background: blackColor,
            opacity: "0"
        }

    },
    menuItem:{
      color: whiteColor,
    
      // justifyContent: "right",
      // left:0,
      // right: "0",
      // alignItems: "center",
    },
   arrow :{
     color: whiteColor,
   },
      blue: {
    
        backgroundColor:  'rgba(255, 255, 255, 0.08)',
        // boxShadow:
        //   "0 12px 20px -10px rgba(" +
        //   hexToRgb(infoColor[0]) +
        //   ",.28), 0 4px 20px 0 rgba(" +
        //   hexToRgb(blackColor) +
        //   ",.12), 0 7px 8px -5px rgba(" +
        //   hexToRgb(infoColor[0]) +
        //   ",.2)",
     
      },
      green: {
        backgroundColor: successColor[0],
        boxShadow:
          "0 12px 20px -10px rgba(" +
          hexToRgb(successColor[0]) +
          ",.28), 0 4px 20px 0 rgba(" +
          hexToRgb(blackColor) +
          ",.12), 0 7px 8px -5px rgba(" +
          hexToRgb(successColor[0]) +
          ",.2)",
        "&:hover,&:focus": {
          backgroundColor: successColor[0],
          boxShadow:
            "0 12px 20px -10px rgba(" +
            hexToRgb(successColor[0]) +
            ",.28), 0 4px 20px 0 rgba(" +
            hexToRgb(blackColor) +
            ",.12), 0 7px 8px -5px rgba(" +
            hexToRgb(successColor[0]) +
            ",.2)",
        },
    }

    
    

})
export default sidebarStyle

