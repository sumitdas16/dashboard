import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'July',
];

export default function StackedBarChart({color}) {
  return (
    <BarChart
    
      width={400}
      height={300}
      series={[
        { data: pData, label: 'Expense', id: 'Expense', stack: 'total',  color:`${color}`},
        { data: uData, label: 'Budget', id: 'Budget', stack: 'total', color:"gray"},
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}
