import { Grid, Paper ,makeStyles } from '@material-ui/core'
import CustomAreaChart from 'Components/charts/CustomAreaChart'
import CustomLineChart from 'Components/charts/CustomLineChart'
import React from 'react'
const useStyles = makeStyles({
    head :{
        display : 'flex',
        justifyContent : 'space-between',
        top:0,
      
        bottom:0,
        
    },

})
const data = [
    {
        day:"Sat",
         fl :8

    },
    {
        day:"Sun",
         fl :32

    },
    {
        day:"Mon",
         fl :18

    },
    {
        day:"Tue",
         fl :27

    },
    {
        day:"We",
         fl :39

    },
    {
        day:"Thu",
         fl :53

    },
    {
        day:"Fri",
         fl :36

    },
]
export default function FlowerCards() {
    const classes = useStyles()
    return (
            
            <Grid container xs = {4} spacing= {0} >
             <Grid  item  xs = {12} >
                <Paper elevation = {4}  >
                    <div className={classes.head}>
                        <p>Followers</p>
                        <p>860K</p>
                    

                    </div>
                    <CustomLineChart
                    title={"Sytem Projects"}
                    data={data}
                    datakey="day"
                    grid = {false}
                    />
                 
                 
                

                </Paper>

            </Grid>
            <Grid  item xs = {12} spacing= {2}>
                <Paper elevation = {4}  >
                    <div className={classes.head}>
                        <p>Followers</p>
                        <p>860K</p>
                    

                    </div>
                    <CustomAreaChart 
                    
                    data={data}
                    dataKey="day"
                   
                    />
                 
                 
                

                </Paper>

            </Grid>

            </Grid>
        
    )
}
