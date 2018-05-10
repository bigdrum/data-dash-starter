import React from 'react';
const chartData = require('./chart1.json');
import ReactEcharts from 'echarts-for-react';

export class Chart1 extends React.Component {
    render() {
        return (
            <ReactEcharts
                option={chartData}
                notMerge={true}
                lazyUpdate={true} />
        );
    }
}
