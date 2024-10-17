import React, { useState } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Cell,
} from "recharts";

const MainSalesChart = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleBarClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart width={150} height={20} data={data} barCategoryGap="12%">
        <Bar dataKey="amt" radius={[10, 10, 10, 10]}>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={index === activeIndex ? "#006FFD" : "#E3E9F5"}
              onClick={() => handleBarClick(index)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </Bar>
        <XAxis dataKey="name" tick={{ fontSize: 12, fillOpacity: 0.6 }} />
        <YAxis
          tick={{ fontSize: 12, fillOpacity: 0.6 }}
          label={{
            value: "(십만원)",
            position: "insideBottom",
            offset: -15,
            fontSize: 12,
            fillOpacity: 0.6,
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MainSalesChart;
