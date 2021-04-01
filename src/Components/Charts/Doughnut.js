import React from "react";
import { PieChart, Pie, Legend, Tooltip, Cell, Label, ResponsiveContainer } from "recharts";
import { LightBlue, MainBlue,MainPink, MainPurple } from "../../Styles/colors";
import {Wrapper} from './styles';

const data = [
  { name: "Electricity", value: 400 },
  { name: "Employee Commute", value: 300 },
  { name: "Travel", value: 300 },
  { name: "Office Supplies", value: 200 }
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
  return (
      <Wrapper>
          <ResponsiveContainer width={500} height={250}>
            <PieChart width={400} height={150}>
                <Pie
                    data={data}
                    cx={200}
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