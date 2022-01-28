
import React from 'react'
import {Button, makeStyles, Paper} from '@material-ui/core'
import {
    drawerWidth,
  
  } from "assets/jss/material-dashboard-react.js";
const useStyles = makeStyles({
    footer:{
        width: `100%`,
        backgroundColor:"#252246",
        left:0,
        zIndex:9990
        
        
    },
    footerItem:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        '& p':{
            color: "#FFFF",
            marginRight: "20px"
        },
        '& Button' : {
            backgroundColor: "#ffa02e",
            marginLeft: "30px"
        }
    },

})
export default function Footer() {
    const classes = useStyles()
    return (
        <Paper elevation = {4}>
        <div className={classes.footer}>
            <div className={classes.footerItem}>
            {/* <Button variant="contained">Get MatX Pro</Button> */}

                <p >Design and Developed by Rasiin Tech</p>
            </div>
        </div>
        </Paper>
    )
}
