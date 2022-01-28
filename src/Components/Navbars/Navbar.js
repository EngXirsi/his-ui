import { AppBar, Toolbar ,makeStyles, Badge, Avatar, Popper, Fade, Box, Grow, Paper, ClickAwayListener, MenuList, MenuItem} from '@material-ui/core'
import { Tabs , Tab } from '@material-ui/core';
import { Home} from '@material-ui/icons';
import React, { useState }  from 'react';
import styles from 'assets/jss/material-dashboard-react/components/headerStyle.js'
import AdminNavbar from './AdminNavbar'
import { Mail, Notifications } from '@material-ui/icons'
import classNames from 'classnames'
import { List  , ListItem  , ListItemText, Drawer, Collapse, ListItemIcon, Divider} from '@material-ui/core'
// import ListItemButton from "@material-ui/core/ListItemButton";
// import ListItemButton from '@mui/material/ListItemButton';
import { ListItemButton } from '@mui/material';

import {NavLink , useLocation} from 'react-router-dom'

import { ChevronRight, ExpandLess, ExpandMore , FiberManualRecord} from '@material-ui/icons';

//hooks
import { useRouteName } from "hooks";
const useStyles = makeStyles(styles)

const notifications = [
    {
        id : 1,
        title: 'Iphone 11 exceeded limit'
    },
    {
        id : 2,
        title: 'Samsung J4 exceeded limit'
    },
    {
        id : 3,
        title: 'Samsung J11 exceeded limit'
    },
    {
        id : 4,
        title: 'Computer Hp exceeded limit'
    },

]
export default function Navbar(navs) {
  const routeName = useRouteName();
  console.log("this is navs",navs.navs)
  const [value,setValue] = useState(0)
  const [index,setIndex] = useState(0)
  const hadnleTabes = (e ,val)=>{
    setValue(val)
    setIndex(val)

  }
  // console.log("this is navs" , navs.navs)
    const classes = useStyles()
    const [openNotification, setOpenNotification] = React.useState(null);
  const [openProfile, setOpenProfile] = React.useState(null);
  const handleClickNotification = (event) => {
    
    // if (openNotification && openNotification.contains(event.target)) {
    //     console.log(event.target)
    //   setOpenNotification(null);
    // } else {
      setOpenNotification(event.currentTarget);
      
    // }
  };
  const arr = [navs.navs]
  
  
  const handleCloseNotification = () => {
    setOpenNotification(null);
  };
  const handleProfileClick = (event) => {
    setOpenProfile(event.currentTarget)
  }
  const closeProfile = () => {
    setOpenProfile(null)
  }
    return (
        <div>
            <AppBar className ={classes.appBar} >
                <Toolbar className ={classes.toolbar}>

        {/* <Tabs
       value = {value} 
       onChange = {hadnleTabes}
       textColor="inherit"
      //  indicatorColor="secondary"
      //  aria-label="secondary tabs example"
      
       
       >
    
         {navs.navs.map((nav , i)=>(
      
              <Tab label = {nav.name}/>

         ))}
     
      
     
        
      </Tabs> */}

     
     


                    <div className={classes.navLinkContainer}>
                      
                 
                    {navs.navs && navs.navs.map((prop, key) => (
            

                   <NavLink 
                   className={classes.navLink}
                   to={prop.layout + prop.path}
            
              > 
                <List >
                       <ListItem >
                         
                           <ListItemText 
                           className = {classes.navLinkText}

                         primary ={prop.name}
                         disableTypography = {true}

                           />
                          


                       </ListItem>
                       
                       
                  
                </List>

                   </NavLink>
                    ))}
                    </div>
                  
                    <div className={classes.icons}>
         
            <Badge badgeContent={4} color="secondary" className={classes.badge}>
              <Mail  />
            </Badge>
            <Badge badgeContent={notifications.length} color="secondary" className={classes.badge}>
              <Notifications
                    aria-owns={openNotification ? "notification-menu-list-grow" : null}
                    aria-haspopup="true"
                    onClick={handleClickNotification}
              
              />
            </Badge>
            <Avatar
            onClick={handleProfileClick}
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/8647814/pexels-photo-8647814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            />
          </div>
          {/* {console.log(openNotification)} */}
          <Popper
          
          open={Boolean(openNotification)}
          anchorEl={openNotification}
          transition
          disablePortal
        
   
          className={
            classNames({ [classes.popperClose]: !openNotification }) +
            " " +
            classes.popperNav
          }
        >
               
          {({ TransitionProps, placement }) => (
          
            <Grow
              {...TransitionProps}
             
            //   style={{
            //     transformOrigin:
            //       placement === "bottom" ? "center top" : "center bottom",
            //   }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseNotification}>
                  <MenuList role="menu">
                      {notifications.map((notice)=>(
                            <MenuItem
                            key = {notice.id}
                            onClick={handleCloseNotification}
                            className={classes.dropdownItem}
                          >
                            {notice.title}
                          </MenuItem>

                      ))}
                  
                 
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>


        <Popper
          
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
        
   
        //   className={
        //     classNames({ [classes.popperClose]: !openProfile }) +
        //     " " +
        //     classes.popperNav
        //   }
        >
               
          {({ TransitionProps, placement }) => (
          
            <Grow
              {...TransitionProps}
             
            //   style={{
            //     transformOrigin:
            //       placement === "bottom" ? "center top" : "center bottom",
            //   }}
            >
              <Paper>
                <ClickAwayListener onClickAway={closeProfile}>
                  <MenuList role="menu">
                      
                            <MenuItem
                           
                            onClick={closeProfile}
                            // className={classes.dropdownItem}
                          >
                            Profile
                          </MenuItem>
                          <MenuItem
                           
                           onClick={closeProfile}
                           // className={classes.dropdownItem}
                         >
                           Settings
                         </MenuItem>
                         <MenuItem
                           
                           onClick={closeProfile}
                           // className={classes.dropdownItem}
                         >
                           Logout
                         </MenuItem>

                    
                  
                 
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
                 
                </Toolbar>
            </AppBar>
            {/* {arr.map((name , i) => (  
          <li>  
            {name}  
          </li>  
        ))}   */}
            {/* {navs.navs.map((nav , i) => (
           
              <TablePanel value = {value} index = {i}> {nav.content && <nav.content/> }</TablePanel>
              
            ))
} */}
        </div>
    )
}
function TablePanel(props){
  const {children , value , index} = props
  return(
    <div>
    {
  value == index &&(
  
    

    <div>{children}</div>
  )
  
    }
    </div>
    )
    
}