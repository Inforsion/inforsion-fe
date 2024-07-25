import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import {SalesData} from "../SalesData";


const CustomBar = ({ fill, x, y, width, height }) => {
    return (
        <g>
        <rect 
            x={x} y={y} 
            width={width} height={height} 
            fill={fill} 
            rx={12}
            ry={12}
            style={{ filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.2))' }} />
        </g>
    );
};

const MainSalesChart = () =>{
    return (
        <ResponsiveContainer width="100%" height={300}>
        <BarChart width={150} height={20} data={SalesData}>
        <Bar dataKey="uv" fill="#006FFD" shape={<CustomBar/>}/>
        <XAxis 
            dataKey="name"
            tick={{ fontSize: 12, fillOpacity: 0.6 }} />
        <YAxis 
            tick={{ fontSize: 12, fillOpacity: 0.6 }}
            label={{value: '(십만원)', 
                    position: 'insideBottom',
                    offset: -15, 
                    fontSize: 12, 
                    fillOpacity: 0.6}}/>
        </BarChart>
    </ResponsiveContainer>
    );

}

export default MainSalesChart;

