import React from 'react';
import { Pie } from '@ant-design/plots';

const Chart = (props) => {
  const { data } = props;
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.5,
    label: {
      type: 'inner',
      offset: '-50%',
      content: function content(_ref) {
        return ''.concat(_ref.value, '%');
      },
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '',
      },
    },
    style: {
      width: '616px',
      height: '270px',
    },
    legend: {
      layout: 'horizontal',
      position: 'top',
      marker: {
        symbol: 'square',
      },
    },
  };
  return <Pie {...config} />;
};

export default Chart;
