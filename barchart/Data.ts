import {ChartData} from 'react-native-chart-kit/dist/HelperTypes';
import {LineChartData} from 'react-native-chart-kit/dist/line-chart/LineChart';
import {StackedBarChartData} from 'react-native-chart-kit/dist/StackedBarChart';

export const barCharData: ChartData = {
   labels:['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
   datasets:[
    {
        data:[50, 45, 60, 70, 20],
        colors:[(opacity=1)=> 'green',(opacity=1)=> 'black',(opacity=1)=> 'green',
        (opacity=1)=> 'black',(opacity=1)=> 'green'
    ]
    }
   ]
}

export const lineChartData: LineChartData = {
    labels:['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets:[
     {
         data:[28, 45, 60, 70, 30],
         color:()=> 'green',
         strokeWidth:10,
     
     },
     {
        data:[30, 45, 50, 100, 50],
        color:()=> 'red',
    }
    ],
    legend:['January','February']
 }

 export const stackedBarChartData: StackedBarChartData = {
    labels:['Mon', 'Tues', 'Wed', 'Thurs', 'Fri'],
    data:[
        [20, 40],
        [50, 20],[20, 20],[40, 20],[30, 20]
    ],
    barColors:['white','yellow'],
    legend:['January', 'February']
}