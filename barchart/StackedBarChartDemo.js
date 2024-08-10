import {View, Text, useWindowDimensions} from 'react-native';
import {StackedBarChart} from 'react-native-chart-kit';
import {stackedBarChartData} from './Data';

const StackedBarChartDemo = ()=>{
    const {width} = useWindowDimensions();
    return (
     <View>
         <Text>Stacked bar chart demo</Text>
         <StackedBarChart
         hideLegend={false}
         data={stackedBarChartData}
         yAxisLabel=''
         yAxisSuffix=''
         width={width}
         height={400}
         chartConfig={{
             backgroundGradientFrom:'yellow',
             backgroundGradientFromOpacity: 1,
             backgroundGradientTo:'green',
             backgroundGradientToOpacity: 1,
             color:()=> 'black',
             barPercentage: 0.7,
             propsForBackgroundLines:{
                stroke: 0,
             }
         }}
         style={{borderColor:'black', borderWidth:1}}
         verticalLabelRotation={40}
         horizontalLabelRotation={40}
         />
     </View>
    )
}

export default StackedBarChartDemo;