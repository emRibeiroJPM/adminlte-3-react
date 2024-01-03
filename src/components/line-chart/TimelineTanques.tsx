import { useEffect, useState } from 'react';
import { Line } from '@ant-design/plots';
import {format} from 'fecha';

function TimelineTanques() {

  const [data,setData] = useState();
  const recebeDados =  async() =>{
    const resposta = await fetch('http://localhost:3000/timelineTanques');
    const json = await resposta.json();
    await setData(json);
    return json;
  }
  useEffect(()=>{
    recebeDados();
  },[])


  const config : any = {
    data: {
      value: data,
      transform: [
        {
          type: 'fold',
          fields: ['Tanque1','Tanque2','Tanque3','Tanque4','Tanque5','Tanque6'],
          key: 'type',
          value: 'value',
        },
      ],
    },
    xField: (d:any) => new Date(d.Data),
    yField: 'value',
    colorField: 'type',
    axis: {
      x: { labelAutoHide: 'greedy' },
      y: { title: 'Nivel do Tanque (%)'}
    },
    slider: {
      x: { labelFormatter: (d:any) => format(d, 'YYYY/M/D') },
    },
    style:{
      lineWidth: 2
    }
  };
  
  return <Line {...config} />;
}
  export default TimelineTanques

