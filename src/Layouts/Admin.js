import Sidebar from 'Components/Sidebar/Sidebar.js'
import Footer from 'Components/footer/Footer.js'
import React from 'react'
import { Routes, Route } from "react-router-dom";
import routes from 'routes.js'
import TopNavbars from 'TopNavbars.js'
import {CssBaseline, makeStyles} from '@material-ui/core'
import logo from "assets/img/reactlogo.png";
import bgImage from "assets/img/sidebar-bg-dark.jpg";
import Navbar from 'Components/Navbars/Navbar';
import styles from 'assets/jss/material-dashboard-react/layout/adminStyle.js'
import DashboardPage from 'views/Dashboard/Dashoard.js'

const useStyles = makeStyles(styles)

const switchRoutes = (
    <Routes>
      {routes.map((prop, key) => {
       
          return (
          
          
            prop.subItems ? prop.subItems.map((item) =>(
          
              <Route
            
              path={prop.layout + item.path}
              element={<item.component />}
              key={key}
            />
            ))
       
            :
            
            <Route
            
              path={prop.layout + prop.path}
              element={<prop.component />}
              key={key}
            />
            
          );
      
      })}
   
    </Routes>
  );


const switchSubRoutes = (
  <Routes>
    {TopNavbars.map((prop, key) => {
     
        return (
        
        
          prop.subItems ? prop.subItems.map((item) =>(
        
            <Route
          
            path={prop.layout + item.path}
            element={<item.component />}
            key={key}
          />
          ))
     
          :
          
          <Route
          
            path={prop.layout + prop.path}
            element={<prop.component />}
            key={key}
          />
          
        );
    
    })}
 
  </Routes>
);



export default function Admin() {
    const classes = useStyles()
    const [color, setColor] = React.useState("blue");
    return (
 
        <div className={classes.wrapper}>
         <Sidebar
         routes = {routes}
        //  logoText = {"Creative Tim"}
         logo = {logo}
         image = {bgImage}
         color = {color}
         
         
         />
         <div className={classes.mainPanel}>
        {/* <Navbar /> */}
           <div className = {classes.content}>
            <div >{switchRoutes}</div>
            <div >{switchSubRoutes}</div>
          </div>
          <Footer />
         </div>
        </div>

    )
}
