
import { makeStyles } from '@material-ui/core';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    Website: 4000,
    Windows: 2000,
    App: 19800,
    Linux: 2290,
  },
  {
    name: 'Feb',
    Website: 4000,
    Windows: 2000,
    App: 19800,
    Linux: 2290,
  },
  {
    name: 'April',
    Website: 4000,
    Windows: 2000,
    App: 19800,
    Linux: 2290,
  },
  {
    name: 'May',
    Website: 4000,
    Windows: 2000,
    App: 19800,
    Linux: 2290,
  },
  {
    name: 'June',
    Website: 4000,
    Windows: 2000,
    App: 19800,
    Linux: 2290,
  },
  {
    name: 'July',
    Website: 4000,
    Windows: 2000,
    App: 19800,
    Linux: 2290,
  },

];
const useStyles = makeStyles({
  chart:{
    // boxSizing: border-box;
    padding: "20px",
    marginTop: "20px",
    marginBottom: "20px",
   
    /*height: 800px;*/
    backgroundColor: "#fff",
  }
})
export default function CustomBarChart() {

  const classes = useStyles() 
  var tooltip
const CustomTooltip = ({ active, payload }) => {
    if (!active || !tooltip)    return null
    for (const bar of payload)
        if (bar.dataKey === tooltip)
            return <div>{ bar.name }<br/>{ bar.value.toFixed(2) }</div>
    return null
}
  
    return (
        <div className={classes.chart}>
            <h3 className="chartTitle">STATISTICS</h3>
        <ResponsiveContainer width="100%" aspect={4 / 2}>

        <BarChart data={data} 
         margin={{ top: 5}}
         barGap={2} 
         
        
        >
           <CartesianGrid 
       stroke="#ccc"
        vertical={false}
        
        
       />
          <Tooltip 
          
          cursor={{ fill: "transparent" }} 
          content={CustomTooltip}
          />
        <XAxis 
        dataKey="name" 
        angle={0} 
        textAnchor="ri" tick={{ fontSize: 13 }} />
 
        <Bar dataKey="Website" fill="#1e3d93" 	 
        barSize={10}
        onMouseOver={ () => tooltip="Website" }
        radius={[20,20,0,0]}
        />

<Bar dataKey="App" fill="#487edb"
         barSize={10} 
        onMouseOver={ () => tooltip="App" }
        radius={[20,20,0,0]}
        />
        <Bar dataKey="Linux" fill="#d6a646" 
        barSize={10} 
        onMouseOver={ () => tooltip="Linux" }
        radius={[20,20,0,0]}
       
        
        />
      
      

         
<Bar dataKey="Windows" fill="#ff3e71"
         barSize={10} 
        onMouseOver={ () => tooltip="Windows" }
        radius={[20,20,0,0]}
        />
        
        <Legend 
        verticalAlign = "top"  
        height={70}
        wrapperStyle={{
          paddingLeft: "10px",
          paddingBottom: "20px"
          
      }}

      iconSize={10}
      iconType="circle"
        
        
        />
       <YAxis
       axisLine={false}
       />
      
        </BarChart>
      </ResponsiveContainer>
        </div>
    )
  
}
