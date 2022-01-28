import {
    drawerWidth,
    transition,
    container,
  } from "assets/jss/material-dashboard-react.js";
  
  const appStyle = (theme) => ({
    wrapper: {
      position: "relative",
      top: "0",
      height: "100vh",
    },
    mainPanel: {
        [theme.breakpoints.up("md")]: {
          width: `calc(100% - ${drawerWidth}px)`,
        },
        overflow: "none",
        position: "relative",
        float: "right",
        ...transition,
        
        width: "100%",
        overflowScrolling: "touch",
   
      },
      content: {
        marginTop: "70px",
       
        minHeight: "calc(100vh - 113px)",
      },
});

export default appStyle;