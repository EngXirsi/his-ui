import { LineChart,
   Line, 
   XAxis,  
   CartesianGrid,
    Tooltip,  
    ResponsiveContainer,
    Area } from 'recharts';
import {makeStyles} from '@material-ui/core'
const useStyles = makeStyles({
  chart:{
    
    // margin: "20px",
    // padding: "20px",
    // -webkit-box-shadow: 0px 0px 11px -1px #000000; 
    // box-shadow: 0px 0px 11px -1px #000000;
},
chartTitle :{
    // marginTop: "20px"
}

})

export default function CustomLineChart({title , data , datakey ,  grid}) {
  const classes = useStyles()
  console.log(data)
    return (
        <div className={classes.chart}>
            {/* <h3 className={classes.chartTitle}>{title}</h3> */}
        <ResponsiveContainer width="100%"   aspect={4 / 2}>
        <LineChart  height={150} data={data} 

        
        >
           <XAxis 
           dataKey={datakey}
            stroke="#34314C"
           opacity= {0.54}
                // type="category"
                // tickCount = {10}
                interval = "preserveStartEnd" // "preserveStart" "prevservEnd"
                // padding={{ left: 20 }}
                // mirror
                // scale="time"
                minTickGap ={5}
                tickLine = {false}
                axisLine={false}
                scale="band"
           />
             <Area type="linear" dataKey="fl" fill="#8884d8" stroke="#8884d8" />
    
         <Line 
        //  'basis' | 'basisClosed' | 'basisOpen' |
        //  'linear' | 'linearClosed' | 'natural' |
        //  'monotoneX' | 'monotoneY' | 'monotone' |
        //  'step' | 'stepBefore' | 'stepAfter' |
          type = "linear"
          dataKey="fl" 
          stroke="#f00" 
          strokeWidth={2}
         dot={{ stroke: 'blue', strokeWidth: 1 }}
         />
         <Tooltip />
        {grid && <CartesianGrid   strokeDasharray = "5 5" stroke="#e0dfdf"/>}
    
        </LineChart>
      </ResponsiveContainer>
        </div>
    )
}