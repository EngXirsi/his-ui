import { Box, Grid, Paper  , Typography , makeStyles } from '@material-ui/core'
import { PeopleOutline , MoreHoriz } from '@material-ui/icons'
import React from 'react'
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  const useStyles = makeStyles({
    head:{
       
       display: "flex",
       justifyContent: "space-between",
       width: "100%",
       paddingRight: "30px",
       top: 0
    },
    paper:{
       
        // alignItems:"center",
        // display: "flex",
        // alignItems: "center",
        // justifyContent:"center",
        // minHeight: '50vh' 
    },
    circle:{
       
        alignItems:"center",
        display: "flex",
        
        justifyContent:"center",
        minHeight: '60vh' ,
       
        
    },
    
      icon :{
        //   widh
      fontSize:"14px",
      color: "gray"
      },
      dots:{
          fontSize:"14px",
          fontWeight:600
      },
      progress:{
        width: '150px',
       
      
      },
      p:{
          textAlign:"center",
          fontWeight: 600,
        //   fontSize:"14px",
          lineHeight: 1.5,
      },
      p2:{
          color:"#34314C",
          fontSize:"12px",
          fontWeight: 300,
          opacity: 0.54,
          whiteSpace: "nowrap"
      },

  })
export default function StcsCard() {
    const classes = useStyles()
    const percentage = 59
    return (
        
            <Grid  item  xs = {4} 
          
            
            >
                <Paper elevation = {4} className ={classes.paper} >
                    <div className={classes.head}>
                    <p>STATISTICS</p>
                    <MoreHoriz />
                    </div>
                    <div className={classes.circle} >
                        <div className={classes.progress} >
                    <CircularProgressbarWithChildren 
                   
                    value={80}
                    circleRatio={0.65}
                    strokeWidth = {6}
                   
                    styles={buildStyles({
                        rotation: 0.5 + (1 - percentage / 100) / 2.5,
                        pathColor:"#3160a8"
                        
                    })}
                 
                  
                    
                    >
  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
 <PeopleOutline />
  <div style={{ fontSize: 22, marginTop: 35 }}>
    <strong>822K</strong> 
  </div>
</CircularProgressbarWithChildren>
<p className = {classes.p}>Awesome</p>
<p className = {classes.p2}>Close to reach 1000k folowers!</p>
</div>
 
    </div>



                </Paper>

            </Grid>
        
    )
}
