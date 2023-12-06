import { Gauge } from "@ant-design/plots"

interface gaugeProps {
  percent: number,
  type?: 'meter',
  innerRadius: number,
  range: {
    ticks: number[],
    color: string[],
  },
  indicator:{
    pointer:{
      style:{
        stroke: string,
      }
    },
    pin:{
      style:string
    },
  },
  statistic:{
    content:{
      style:{
        fontSize: '36px',
        lineHeight: '36px',
      },
    },
  },
}

function GaugeComponent({percent}:gaugeProps) {
  
  const config ={
    percent: percent ,
    type: 'meter',
    innerRadius: 0.75,
    range: {
      ticks: [0,1/3,2/3,1],
      color: ['#30BF78','#FAAD14','#F4664A',],
    },
    indicator:{
      pointer:{
        style:{
          stroke: '#D0D0D0',
        }
      },
      pin:{
        style: '#D0D0D0'
      },
    },
    statistic:{
      content:{
        style:{
          fontSize: '36px',
          lineHeight: '36px',
        },
      },
    },
  }

  return <Gauge {...config}/>
}

export default GaugeComponent