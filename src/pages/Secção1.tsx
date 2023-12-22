/* eslint-disable jsx-a11y/anchor-is-valid */
import {ContentHeader} from '@components';
import TankLevel from '@app/components/tank-level-Indicator/TankLevel';
import { Button} from 'antd';
import {SwapLeftOutlined,SwapRightOutlined} from '@ant-design/icons'
import { useRef } from 'react';
import LineChartV2 from '@app/components/line-chart/LineChartV2';
import { useState,useEffect } from 'react';

interface dbDataTanqueType {
  "Tanque": string | any,
  "Nivel": number | any,
  "MateriaPrima": string | any
}

const defaultTanqueVal:dbDataTanqueType = {
  "Tanque": "Tanque ?",
  "Nivel": 0.24,
  "MateriaPrima": "Materia Prima X"
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
  
  const [tanque1,setTanque1] = useState<dbDataTanqueType>(defaultTanqueVal)
  const [tanque2,setTanque2] = useState<dbDataTanqueType>(defaultTanqueVal)
  const [tanque3,setTanque3] = useState<dbDataTanqueType>(defaultTanqueVal)
  const [tanque4,setTanque4] = useState<dbDataTanqueType>(defaultTanqueVal)
  const [tanque5,setTanque5] = useState<dbDataTanqueType>(defaultTanqueVal)
  const [tanque6,setTanque6] = useState<dbDataTanqueType>(defaultTanqueVal)

/*
  FUNCAO DEPRECADA
  const recebeInfoTodosTanques = async () => {
    const resposta = await fetch('http://localhost:3000/tanques/all')
    const json:any = await resposta.json()
    //console.log("a resposta todos é",json)
    return json
  }
*/
  const consomeDadosBD = async ()=>{
    const resposta = await fetch('http://localhost:3000/tanques')
    const json:any = await resposta.json()
    console.log("a resposta da Base de Dados é",json.tanques)
    return json
  }

  useEffect(() => {
    consomeDadosBD().then((res)=>{
      let obj = res.tanques;
      setTanque1(obj[0])
      setTanque2(obj[1])
      setTanque3(obj[2])
      setTanque4(obj[3])
      setTanque5(obj[4])
      setTanque6(obj[5])
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
                  <TankLevel percent={tanque1.Nivel} title={tanque1.Tanque} materiaPrima={tanque1.MateriaPrima}/> 
                </div>
                <div>
                  <TankLevel percent={tanque2.Nivel} title={tanque2.Tanque} materiaPrima={tanque2.MateriaPrima}/> 
                </div>
                <div>
                  <TankLevel percent={tanque3.Nivel} title={tanque3.Tanque} materiaPrima={tanque3.MateriaPrima}/> 
                </div>
                <div>
                  <TankLevel percent={tanque4.Nivel} title={tanque4.Tanque} materiaPrima={tanque4.MateriaPrima}/> 
                </div>
                <div>
                  <TankLevel percent={tanque5.Nivel} title={tanque5.Tanque} materiaPrima={tanque5.MateriaPrima}/> 
                </div>
                <div>
                  <TankLevel percent={tanque6.Nivel} title={tanque6.Tanque} materiaPrima={tanque6.MateriaPrima}/> 
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
