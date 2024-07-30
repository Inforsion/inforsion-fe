import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Cell } from 'recharts';
import {SalesData} from "../SalesData";


const CustomBar = ({ fill, x, y, width, height, DMax }) => {
    return (
        <g>
        <rect 
            x={x} y={y} 
            width={width} height={height} 
            fill={fill} 
            rx={12}
            ry={12}
            />
        </g>
    );
};

const MainSalesChart = () =>{
    const maxValue = Math.max(...SalesData.map(data => data.uv));

    return (
        <ResponsiveContainer width="100%" height={260}>
        <BarChart width={150} height={20} data={SalesData} barCategoryGap="15%">
            <Bar dataKey="uv" shape={<CustomBar/>}>
                {SalesData.map((entry, index) => (
                    <Cell 
                        key={`cell-${index}`} 
                        fill={entry.uv === maxValue ? '#006FFD' : '#E3E9F5'}
                        shape={<CustomBar DMax={entry.uv === maxValue} />}/>
                ))}
            </Bar>
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

