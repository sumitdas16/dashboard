import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { lineChartData } from '../../data/dummy';

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{
        dataKey:"year",
        scaleType:"point",
        data:lineChartData.years,        
    }]}
      series={lineChartData.sales}
      width={400}
      height={300}
    />
  );
}