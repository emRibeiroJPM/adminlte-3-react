import { Line } from '@ant-design/plots';
interface dataType {
  Dates : string,
  scales: number | string
}

function LineChart() {
  
  const config : any = {
    data: {
      type:'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json',
      transform: [
        {
          type: 'fold',
          fields: ['scales'],
          key: 'type',
          value: 'value',
        },
      ],
    },
    xField: (d:any) => new Date(d.Date),
    yField: 'value',
    colorField: 'type',
    axis: {
      x: { labelAutoHide: 'greedy' },
    },
  };
  
  return <Line {...config} />;
}

export default LineChart
