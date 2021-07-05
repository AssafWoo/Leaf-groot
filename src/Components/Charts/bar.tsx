import React from 'react';
import { BarChart, Bar,Tooltip, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { DarkerTheme, LightBlue, MainGreen } from '../../Styles/colors';
import { Wrapper } from './styles';

export interface Idata {
    name?:string;
    data:any;
}


const BarsChart = ({data}: Idata) => {
  const chartData = data.data;
    return (
        <Wrapper>
            <ResponsiveContainer height={200}>
                <BarChart data={chartData}>
                    <Bar barSize={20} dataKey={data.name === 'transactions' ? 'transactions' : 'co2'} fill={data.name !== 'co2' ? MainGreen: LightBlue} />
                    <XAxis tick={{fill:'white'}} dataKey="name" />
                    <YAxis tick={{fill:'white'}} />
                    <Tooltip cursor={{fill:DarkerTheme, fillOpacity:0.5}} />
                </BarChart>
            </ResponsiveContainer>
        </Wrapper>

    );
}
export default BarsChart;
