import React from 'react';
import ReactECharts from 'echarts-for-react';

const CircleChart = ({ ValueArr }) => {
    let height, width;
    height = width = 100;

    const option = {
        series: [
            {
                type: 'pie',
                radius: ['50%', '70%'],
                label: {
                    show: false,
                },
                tooltip: {
                    show: false,
                },
                data: ValueArr,
            },
        ],
    };

    return (
        <ReactECharts
            option={option}
            style={{ height: `${height}px`, width: `${width}px` }}
        />
    );
};

export default CircleChart;
