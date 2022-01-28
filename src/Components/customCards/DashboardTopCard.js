import { Grid, makeStyles, Paper } from '@material-ui/core'
import {PeopleOutline , Place , KeyboardVoice , CardGiftcard} from '@material-ui/icons'
import React from 'react'
import CustomCards from 'Components/customCards/CustomCards.js'
const useStyles = makeStyles({
    featured: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "left"
    
    },
    feturedItem :{
       
        flex: 1,
        margin: "0px 20px",
        padding: "30px",
        borderRradius: "10px",
        webkitBoxShadow: "0px 0px 9px -1px #000000",
        boxShadow: "rgb(0 0 0 / 6%) 0px 3px 3px -2px, rgb(0 0 0 / 4%) 0px 3px 4px 0px, rgb(0 0 0 / 4%) 0px 1px 8px 0px !important",

    },
    featuredTitle : {
        fontSize: "30px",
        fontWeight: 400,
        marginLeft: "20px"
    
    },
    featuredSub:{
        fontSize: "14px",
        color: "grey",
        justifyContent: "center",
       
    }
})

export default function DashboardTopCard() {
    const classes =useStyles()
    return (
        <div>
    
     {/* <div className={classes.featured}> */}
            {/* Revenue */}
            <Grid container >
            <CustomCards
           Icon = {PeopleOutline}
               
          title ={"10,495"}
           
       
         subtitle ={"New Members"}
            
            />
            <CustomCards
             Icon = {Place}
               
             title ={"  30,942"}
              
          
            subtitle ={"Places added"}
            />
            <CustomCards
              Icon = {KeyboardVoice}
               
              title ={"45,269"}
               
           
             subtitle ={"Support Members"}
            
            />
            <CustomCards
               Icon = {CardGiftcard}
               
               title ={"20,965"}
                
            
              subtitle ={"Tags Used"}
            
            
            />
               
            </Grid>
                    
                
            
            


            {/* </Grid> */}

        </div>
    )
}
