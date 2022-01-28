import { Grid , makeStyles } from '@material-ui/core'
import { PeopleOutline , AttachFile ,  ModeComment ,Visibility ,  Colorize  } from '@material-ui/icons'
import React from 'react'
import CustomCards from './CustomCards'
const useStyles = makeStyles({
    grid: {}

})

export default function DashboardBottomCard() {
    const classes =useStyles()
    return (
     

        
      
            <Grid container  xs = {4}  >
                <CustomCards
                Icon = { Colorize}
                title="48"
                subtitle = "New Post"
                itemZise = {6}
                
                
                />
                 <CustomCards
                 Icon = {AttachFile}
                title="291"
                subtitle = "Attached Files"
                itemZise = {6}
                
                
                />
                   <CustomCards
                   Icon = { ModeComment}
                title="291"
                subtitle = "Comments"
                itemZise = {6}
                
                
                />
                   <CustomCards
                   Icon = { Visibility}
                title="110"
                subtitle = "Total Views"
                itemZise = {6}
                
                
                />

            </Grid>

             
          
         
        
    )
}
