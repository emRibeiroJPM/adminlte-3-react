import { Line } from '@ant-design/plots';
import React from 'react'

function LineChartV2() {
    const config : any  = {
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
        xField: (d:any) => new Date(d.date),
        yField: 'value',
        colorField: 'type',
        axis: {
          x: { labelAutoHide: 'greedy' },
        },
      };

    return(<><Line {...config}/></>)}

export default LineChartV2