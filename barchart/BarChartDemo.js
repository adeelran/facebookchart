import {View, Text, useWindowDimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {barCharData} from './Data';

const BarChartDemo = ()=>{
    const {width} = useWindowDimensions();
   return (
    <View style={{justifyContent:"center",alignItems:"center",marginTop:60}}>
        <Text>Bar chart demo</Text>
        <BarChart
        data={barCharData}
        yAxisLabel=''
        yAxisSuffix=''
        width={width}
        height={400}
        chartConfig={{
            backgroundGradientFrom:'yellow',
            backgroundGradientFromOpacity: 0.5,
            backgroundGradientTo:'lightgreen',
            backgroundGradientToOpacity: 1,
            color:()=> 'red',
            barPercentage: 0.6
        }}
        style={{borderColor:'black', borderWidth:1,marginTop:60}}
        withInnerLines={false}
         verticalLabelRotation={50}
        // horizontalLabelRotation={40}
        showValuesOnTopOfBars
        showBarTops={false}
        withCustomBarColorFromData
        flatColor
        />
    </View>
   )
}

export default BarChartDemo;