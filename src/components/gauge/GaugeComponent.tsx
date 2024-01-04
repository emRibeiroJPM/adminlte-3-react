import { Common, Gauge } from "@ant-design/plots"
import {Cascader} from 'antd';
import {useEffect, useState} from 'react';


interface Opcao {
  value: string | number | undefined,
  label: string,
  children?: Opcao[];
}

//IMPLEMENTAR USE STATE DA MAQUINA PARA USAR NO TITULO DO VISOR DOS GAUGES

const opcoes: Opcao[] = [
  {
    value: 'Seccao 1',
    label: 'Seccao 1',
    children:[
      {
        label:'Maquina 1',
        value:'Máquina 1',
      },
      {
        label:'Maquina 2',
        value:'Máquina 2',
      },
      {
        label:'Maquina 3',
        value:'Máquina 3',
      }
    ]
  },
  {
    value: 'Seccao 2',
    label: 'Seccao 2',
    children:[
      {
        label:'Maquina 1',
        value:'Máquina 1',
      },
      {
        label:'Maquina 2',
        value:'Máquina 2',
      },
    ]
  },
  {
    value: 'Seccao 3',
    label: 'Seccao 3',
    children:[
      {
        label:'Maquina 1',
        value:'Máquina 1',
      },
    ]
  }
]


interface gaugeProps {
  valorAtual: Common | number,
  valorMaximo: Common | number
}


function GaugeComponent({valorAtual,valorMaximo}:gaugeProps) {
  
  const [titulo,setTitulo] = useState("Visor de Controlo");
  
  const onChange = (escolha : Opcao['value'] | any) =>{
    console.log(escolha);
    setTitulo(escolha[1]);
  }

  const [data,setData] = useState();

  const getData = async () =>{
    try {
      const resposta = await fetch('http://localhost:3000/maquinas');
      const json = await resposta.json();
      setData(json);
      return `Dados recebidos com sucesso ${json}`
    } catch (error) {
      console.error("Falha na obtençao dos dados",error)
    }
  }

  useEffect(()=>{
    getData().then((response)=>{console.log(`A resposta recebida do fetch foi ${response}`)})
  },[])

  const config : any = {
    width: 400,
    height: 400,
    autoFit: false,
    data: {
      target: valorAtual,
      total: valorMaximo,
      name: 'valor atual',
      thresholds: [40, 80, 120],
    },
    legend: false,
    scale: {
      color: {
        range: ['green','#FAAD14','#F4664A'],
      },
    },
    style: {
      textContent: (target:number, total:number) => `Valor Atual: ${target}\n Percentagem: ${((target / total) * 100).toPrecision(2)}%`,
    },
  };
  return (<>
    <div style={{display:"flex", flexDirection:"column",alignItems:"center",flexWrap:"wrap"}}>
      <div style={{marginBottom:"-10vh", textAlign:"center"}}>
          <h3 style={{marginBottom:"-2px",fontSize:"1.em"}}>{titulo}</h3>
        <Gauge {...config}/>
      </div>
      <p style={{marginBottom:"3%", fontSize:"1.125em"}}>Máquina a analisar</p>
      <Cascader options={opcoes} onChange={onChange} placeholder="Escolha uma maquina" />
    </div>
  </>
  );
}

export default GaugeComponent