import { Box, Modal, Typography } from '@material-ui/core';
import MaterialTable from 'material-table';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from 'Components/Navbars/Navbar';
import OPDNavbar from 'Components/Navbars/OPDNavbar';
const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
function Patient() {
  const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [tableData , setTableData] = useState([
        {"name":"Nimco" , "phone":"0612926234" , "email":"nimco@gmail.com" , "age" :"14", "address":"Hodan"}
      ])
      const columns = [
        {title: 'Name' , field:'name'},
        {title: 'Phone' , field:'phone'},
        {title: 'Email' , field:'email'},
        {title: 'Age' , field:'age'},
        {title: 'Address' , field:'address'},
      ]
      return (
        <div className="App">
          <Navbar navs = {OPDNavbar }/>
          <div >
        <div>
          <MaterialTable 
          columns = {columns}
          title = "Patient Information"
        //   options={{
        //     exportButton: true
        //   }}
          data={tableData}
          onRowClick={(event , rowData) => navigate("../admin/patientview")}
          actions={[
            {
              icon: 'add',
              tooltip: 'Add User',
              isFreeAction: true,
              onClick:  handleOpen
            }
          ]}
          
          /> 
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" >
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    
         </div>
          
            
    
    </div>
        
        
    
        </div>
        
      );
}
export default  Patient