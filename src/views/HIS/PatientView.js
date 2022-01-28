import { AppBar, Tab, Tabs } from '@material-ui/core';
import Navbar from 'Components/Navbars/Navbar';
import OPDNavbar from 'Components/Navbars/OPDNavbar';
import MaterialTable from 'material-table';
import React, { useState } from 'react';

export default function PatientView() {
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
      const [value,setValue] = useState(0)
      const hadnleTabes = (e ,val)=>{
        setValue(val)
    
      }
      return (

        
        <div className="App">
            <Navbar navs = {OPDNavbar }/>
            <div>
                <h1>Patient Info:</h1>

            </div>
             <AppBar position="static">
          <Tabs
           value = {value} 
           onChange = {hadnleTabes}
           textColor="inherit"
          //  indicatorColor="secondary"
          //  aria-label="secondary tabs example"
          
           
           >
            <Tab label = "item 1" 
    
            
            
            />
            <Tab label = "item 2"/>
            <Tab label = "item 3"/>
            <Tab label = "item 3"/>
            <Tab label = "item 3"/>
            <Tab label = "item 3"/>
            <Tab label = "item 3"/>
            <Tab label = "item 3"/>
          </Tabs>
          </AppBar>
          <TablePanel value = {value} index = {0}>
          <MaterialTable 
          columns = {columns}
          title = "Student Information"
          options={{
            exportButton: true
          }}
          data={tableData}
          
          /> 
            
             </TablePanel>
          <TablePanel value = {value} index = {1}>item 2 </TablePanel>
          <TablePanel value = {value} index = {2}>item 3 </TablePanel>
    
        
      
    
        </div>
      );
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
