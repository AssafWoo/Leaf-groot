import React from 'react';
import { BarChart, Bar,Tooltip, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { DarkerTheme, LightBlue } from '../../Styles/colors';
import { Wrapper } from './styles';

const data = [
  {
    name: 'S',
    co2: 4000,
  },
  {
    name: 'S',
    co2: 3523,
  },
  {
    name: 'M',
    co2: 2143,
  },

  {
    name: 'T',
    co2: 4535,
  }, 
  {
    name: 'W',
    co2: 874,
  },
  {
    name: 'T',
    co2: 84,
  },
  {
    name: 'F',
    co2: 854,
  }

];

const BarsChart = ({width}) => {

    return (
        <Wrapper>
            <ResponsiveContainer width={width} height={200}>
                <BarChart data={data}>
                    <Bar barSize={20}  dataKey="co2" fill={LightBlue} />
                    <XAxis tick={{fill:'white'}} dataKey="name" />
                    <YAxis tick={{fill:'white'}}  />
                    <Tooltip cursor={{fill:DarkerTheme, fillOpacity:0.5}} />
                </BarChart>
            </ResponsiveContainer>
        </Wrapper>

    );
}
export default BarsChart;
