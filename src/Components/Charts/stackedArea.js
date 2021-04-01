import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LightBlue, MainPink, MainPurple } from '../../Styles/colors';
import {Wrapper} from './styles';

const data = [
  {
    name: 'Jan',
    co2e: 4000,
    kwh: 2400,
  },
  {
    name: 'Feb',
    co2e: 3000,
    kwh: 1398,
  },
  {
    name: 'Mar',
    co2e: 2000,
    kwh: 9800,
  },
];

const StackedArea = () =>  {
    const width = 500;
    const height = 200;
    return (
        <Wrapper>
            <ResponsiveContainer height={height}>
                <AreaChart
                width={width}
                height={height}
                data={data}
                >
                <XAxis tick={{fill:'white'}} dataKey="name" />
                <YAxis tick={{fill:'white'}} />
                <Tooltip />
                <Area type="monotone" dataKey="co2e" stackId="1" stroke={MainPurple}fill={MainPurple}/>
                <Area type="monotone" dataKey="kwh" stackId="1" stroke={LightBlue} fill={LightBlue} />
                </AreaChart>
            </ResponsiveContainer>
      </Wrapper>
    );
  
}

export default StackedArea;