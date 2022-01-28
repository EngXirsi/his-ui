import { FormControl, Grid, makeStyles, MenuItem, Paper, Select } from '@material-ui/core'
import React from 'react'
import styles from 'assets/jss/material-dashboard-react/views/dashboadStyle.js'
import CustomCard from 'Components/customCards/CustomCards.js'
import CustomBarChart from 'Components/charts/BarChart'
import DashboardTopCard from 'Components/customCards/DashboardTopCard.js'
import DashboardBottomCard from 'Components/customCards/DashboardBottomCard'
import StcsCard from 'Components/customCards/StcsCard'
import FlowerCards from 'Components/customCards/FlowerCards'
import Navbar from 'Components/Navbars/Navbar';
import OPDNavbar from 'Components/Navbars/OPDNavbar';
const useStyles = makeStyles(styles)
export default function DashboardPage() {
    const classes = useStyles()
    const [age, setAge] = React.useState(10);
    const handleChange = (event) => {
        setAge(event.target.value);
      };
    return (
       
        <div>
          
            <div className={classes.pageHeader} >
                <p>Overview</p>
        <FormControl  >
        <Select
          value={age}
          onChange={handleChange}
          variant = "outlined"
          className={classes.dropdownConrol}
        //   displayEmpty
        //   inputProps={{ 'aria-label': 'Without label' }}
        >
         
          <MenuItem value={10}>Last Year</MenuItem>
          <MenuItem value={20}>This Month</MenuItem>
          <MenuItem value={30}>Last Month</MenuItem>
        </Select>
        
      </FormControl>

            </div>
            <DashboardTopCard />
            <Paper elevation={3} >
           <CustomBarChart />

            </Paper>
          <Grid container  spacing = {2}>
         <DashboardBottomCard />
         <StcsCard />
         <FlowerCards />
        
     
          </Grid>
        </div>
    )
}
