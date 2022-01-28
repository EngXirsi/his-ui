import React from 'react'
import Button from 'Components/customButtom/CustomButton.js'
import { Notifications } from '@material-ui/icons'
export default function AdminNavbar() {
    return (
        <div>
      <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
         
          aria-haspopup="true"
       
        //   className={classes.buttonLink}
        >
          <Notifications  />
          <span >5</span>
       
        </Button>
        </div>
    )
}
