import PropTypes from 'prop-types';
import ReactECharts from 'echarts-for-react';

const CircleChart = ({ valueArr }) => {
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
                    data: valueArr,
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

CircleChart.propTypes = {
     valueArr: PropTypes.array.isRequired,
};

export default CircleChart;
