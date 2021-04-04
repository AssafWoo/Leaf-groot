import React from 'react';
import { BarChart, Bar,Tooltip, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { DarkerTheme, LightBlue } from '../../Styles/colors';
import { Wrapper } from './styles';

const data = [
  {
    name: 'A',
    co2e: 4000,
  },
  {
    name: 'B',
    co2e: 3523,
  },
  {
    name: 'You',
    co2e: 2143,
  },

  {
    name: 'D',
    co2e: 4535,
  }, 
{
    name: 'E',
    co2e: 854,
  }

];

const BarsChart = () => {

    return (
        <Wrapper>
            <ResponsiveContainer width={370} height={200}>
                <BarChart data={data}>
                    <Bar barSize={20}  dataKey="co2e" fill={LightBlue} />
                    <XAxis tick={{fill:'white'}} dataKey="name" />
                    <YAxis tick={{fill:'white'}}  />
                    <Tooltip cursor={{fill:DarkerTheme, fillOpacity:0.5}} />
                </BarChart>
            </ResponsiveContainer>
        </Wrapper>

    );
}
export default BarsChart;
