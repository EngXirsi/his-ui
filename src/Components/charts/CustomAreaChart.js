
import React from 'react'
import { Area, 
    CartesianGrid,
     ComposedChart, 
     Legend, XAxis, YAxis ,Tooltip, ResponsiveContainer, AreaChart } from 'recharts'

export default function CustomAreaChart({data , dataKey}) {
    return (
        <div>
  <ResponsiveContainer width="100%" aspect={4 / 2}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey={dataKey} />
       
          <Tooltip />
          {/* <Area connectNulls type="monotone" dataKey="fl" stroke="#8884d8" fill="#8884d8" /> */}
          
          <Area type="linear" dataKey="fl" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
        </div>
    )
}
