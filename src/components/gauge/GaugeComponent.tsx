import { Common, Gauge } from "@ant-design/plots"
import {Cascader} from 'antd';

interface Opcao {
  value: string | number,
  label: string,
  children?: Opcao[];
}

const opcoes: Opcao[] = [
  {
    value: 'Seccao 1',
    label: 'Seccao 1',
    children:[
      {
        label:'Maquina 1',
        value:'Maquina 1',
      },
      {
        label:'Maquina 2',
        value:'Maquina 2',
      },
      {
        label:'Maquina 3',
        value:'Maquina 3',
      }
    ]
  },
  {
    value: 'Seccao 2',
    label: 'Seccao 2',
    children:[
      {
        label:'Maquina 1',
        value:'Maquina 1',
      },
      {
        label:'Maquina 2',
        value:'Maquina 2',
      },
    ]
  },
  {
    value: 'Seccao 3',
    label: 'Seccao 3',
    children:[
      {
        label:'Maquina 1',
        value:'Maquina 1',
      },
    ]
  }
]

const onChange = (escolha : Opcao["value"]) =>{
  console.log(escolha)
}

interface gaugeProps {
  valorAtual: Common
}

function GaugeComponent({valorAtual}:gaugeProps) {
  
  const config = {
    width: 400,
    height: 400,
    autoFit: false,
    data: {
      target: valorAtual,
      total: 400,
      name: 'score',
      thresholds: [100, 200, 400],
    },
    legend: false,
    scale: {
      color: {
        range: ['#F4664A', '#FAAD14', 'green'],
      },
    },
    style: {
      textContent: (target:any, total:any) => `Valor Atual: ${target}\n Percentagem: ${(target / total) * 100}%`,
    },
  };
  return (<>
    <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
      <Gauge {...config}/>´
      <label style={{}}>Maquina a analisar</label>
      <Cascader options={opcoes} onChange={onChange} placeholder="Escolha uma maquina" />
    </div>
  </>
  );
}

export default GaugeComponent