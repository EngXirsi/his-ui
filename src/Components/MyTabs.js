import { Tabs , Tab , AppBar} from '@material-ui/core';
import { Home} from '@material-ui/icons';

import MaterialTable from 'material-table'
import { useState } from 'react';

function MyTabs() {
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
export default MyTabs;
