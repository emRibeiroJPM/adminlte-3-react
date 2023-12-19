import { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import { format } from 'path';

interface dataType {
  Dates : string,
  scales: number | string
}

function LineChart() {
  
  const config = {
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


  /*
  const [data,setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  */

  /*
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/blockchain.json',
      transform: [
        {
          type: 'fold',
          fields: ['blockchain', 'nlp'],
          key: 'type',
          value: 'value',
        },
      ],
    },
    xField: (d) => new Date(d.date),
    yField: 'value',
    colorField: 'type',
    axis: {
      x: { labelAutoHide: 'greedy' },
    },
  };
  */