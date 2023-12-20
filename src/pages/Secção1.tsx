/* eslint-disable jsx-a11y/anchor-is-valid */
import {ContentHeader} from '@components';
import TankLevel from '@app/components/tank-level-Indicator/TankLevel';
import { Button} from 'antd';
import {SwapLeftOutlined,SwapRightOutlined} from '@ant-design/icons'
import { useRef } from 'react';
import LineChartV2 from '@app/components/line-chart/LineChartV2';
import { useState,useEffect } from 'react';
interface dataTanqueType {
  "label": string | undefined,
  "value": {
      "Tanque": string | any,
      "Nivel": number | any,
      "MatériaPrima": string | any
  }
}

const defaultTanqueVal:dataTanqueType = {
  "label": "",
  "value": {
      "Tanque": "Tanque ?",
      "Nivel": 0.24,
      "MatériaPrima": "Materia Prima X"
  }
}

const Secção1 = () => {

  const horizontalRef: any = useRef();

  const handleHorizontalScroll = (direction:string) => {
    if(direction === 'left') {
      horizontalRef ? (horizontalRef.current.scrollLeft -= 200) : null;
    }else{
      horizontalRef ? (horizontalRef.current.scrollLeft += 200) : null;
    }
  };
  
  const [tanque1,setTanque1] = useState<dataTanqueType>(defaultTanqueVal)
  const [tanque2,setTanque2] = useState<dataTanqueType>(defaultTanqueVal)
  const [tanque3,setTanque3] = useState<dataTanqueType>(defaultTanqueVal)
  const [tanque4,setTanque4] = useState<dataTanqueType>(defaultTanqueVal)
  const [tanque5,setTanque5] = useState<dataTanqueType>(defaultTanqueVal)
  const [tanque6,setTanque6] = useState<dataTanqueType>(defaultTanqueVal)



  const recebeInfoTodosTanques = async () => {
    const resposta = await fetch('http://localhost:3000/tanques/all')
    const json:any = await resposta.json()
    console.log("a resposta todos é",json)
    return json
  }

  useEffect(() => {
    recebeInfoTodosTanques().then((result:any)=>{
      let objetos = result
      //console.log("isto vem dos objectos",objetos)
      //console.log("primeiro objeto",objetos[0])
      setTanque1(objetos[0])
      setTanque2(objetos[1])
      setTanque3(objetos[2])
      setTanque4(objetos[3])
      setTanque5(objetos[4])
      setTanque6(objetos[5])
      //console.log("isto e o tanque1",tanque1)
    })
  }, []);
  
  return (
  <div>
      <ContentHeader title="Primeira Secção da Fábrica" />
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Nível dos tanques</h3>
            </div>
            <div className="card-body">
              <div id="conteudo" ref={horizontalRef} className="card-body" style={{display:'flex',
                flexDirection:'row',
                maxWidth:'100%',
                justifyContent:'flex-start',
                overflow:'hidden'}}>
                <div>
                  <TankLevel percent={tanque1.value.Nivel} title={tanque1.value.Tanque} materiaPrima={tanque1.value.MatériaPrima}/> 
                </div>
                <div>
                  <TankLevel percent={tanque2.value.Nivel} title={tanque2.value.Tanque} materiaPrima={tanque2.value.MatériaPrima}/>
                </div>
                <div>
                  <TankLevel percent={tanque3.value.Nivel} title={tanque3.value.Tanque} materiaPrima={tanque3.value.MatériaPrima}/>
                </div>
                <div>
                  <TankLevel percent={tanque4.value.Nivel} title={tanque4.value.Tanque} materiaPrima={tanque4.value.MatériaPrima}/>
                </div>
                <div>
                  <TankLevel percent={tanque5.value.Nivel} title={tanque5.value.Tanque} materiaPrima={tanque5.value.MatériaPrima}/>
                </div>
                <div>
                  <TankLevel percent={tanque6.value.Nivel} title={tanque6.value.Tanque} materiaPrima={tanque6.value.MatériaPrima}/>
                </div>
              </div>
              <div className='buttonsContainer' style={{display:'flex', justifyContent:'center',gap:'15px'}}>
                <Button icon={<SwapLeftOutlined />} size='large' type='primary' shape='circle' onClick={()=>handleHorizontalScroll('left')}/>
                <Button icon={<SwapRightOutlined />} size='large' type='primary' shape='circle' onClick={()=>handleHorizontalScroll('right')}/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Timeline do Nível dos Tanques</h3>
            </div>
            <div className="card-body">
                <LineChartV2/> 
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Secção1;


/*
const pedidoDeInformacao = async () =>{
  const resposta = await fetch('http://localhost:3000/tanques/1')
  const json:any = await resposta.json()
  console.log("a resposta é",json)
  return json
 }
*/