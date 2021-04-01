import React from "react";
import { PieChart, Pie, Legend, Tooltip, Cell, Label, ResponsiveContainer } from "recharts";
import { LightBlue, MainBlue,MainPink, MainPurple } from "../../Styles/colors";
import {Wrapper} from './styles';

const data = [
  { name: "Electricity", value: 40 },
  { name: "Employee Commute", value: 30 },
  { name: "Travel", value: 20 },
  { name: "Office Supplies", value: 10 }
];
const COLORS = [MainPink, MainPurple, MainBlue, LightBlue];

const LegenedText = (value) => {
    return <span style={{ color:'white' }}>{value}</span>;
  };
  

const CustomLabel = ({viewBox, value1, value2}) => {
    const {cx, cy} = viewBox;
    return (
     <text fill="white" x={cx} y={cy} className="recharts-text recharts-label" textAnchor="middle" dominantBaseline="central">
        <tspan alignmentBaseline="middle" fontSize="24">{value1}</tspan>
     </text>
    )
  }


// should get data object, custom values as props
const DoughNut = () => {
    const width = 400;
    const height = 250;
  return (
      <Wrapper>
          <ResponsiveContainer height={height}>
            <PieChart width={width} height={height - 100}>
                <Pie
                    data={data}
                    cx={(width / 2) - (width / 4)}
                    cy={120}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={0}
                    dataKey="value"
                    strokeWidth="0"
                    
                >
                    {data.map((entry, index) => (
                    <Cell cursor="pointer"
                        key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    <Label width={30} position="center"
                    content={<CustomLabel value1={'1,254Kg'} />}>
                    </Label>
                </Pie>
                <Tooltip position={{x: 300, y: 100}} animationEasing="linear" />
                <Legend verticalAlign="top" height={36} formatter={LegenedText} />
            </PieChart>
        </ResponsiveContainer>
    </Wrapper>
  );
}
export default DoughNut;