import { Grid, makeStyles, Paper  } from '@material-ui/core'
import {PeopleOutline , Place , KeyboardVoice , CardGiftcard} from '@material-ui/icons'
import React from 'react'
const useStyles = makeStyles({
    featured: {
        // width: "100%",
       
        // justifyContent: "space-between",
        // alignItems: "left"
    
    },
    feturedItem :{
       
       
        margin: "0px 20px",
        padding: "30px",
        borderRradius: "10px",
        textAlign: "center"
        // boxSizing: "border-box"
       
    },
    featuredTitle : {
        fontSize: "32px",
        fontWeight: 500,
        alignItems: "center",
        // marginLeft: "20px",
        // wordWrap: "break-word",
    
    },
    featuredSub:{
        fontSize: "14px",
        color: "grey",
        textAlign: "center"
        // justifyContent: "center",
       
    }
})

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

export default function CustomCards(props) {
    const classes =useStyles()
    const {Icon , title , subtitle , itemZise = 3} = props;
    // const icon= ""
    return (
    
    

          
            
            <Grid item xs={itemZise}>
            {/* <Item> */}
                <Paper elevation={4} className={classes.feturedItem}>
                
               <p> {Icon ?  <Icon/> : null}  </p>
                <span className={classes.featuredTitle}>
                

                {title}
                </span>
            
                <p className={classes.featuredSub}>{subtitle}</p>
                </Paper>
                {/* </Item> */}
            </Grid>
            

            
         

       
    )
}
