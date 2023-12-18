/* eslint-disable jsx-a11y/anchor-is-valid */
import {ContentHeader} from '@components';
import TankLevel from '@app/components/tank-level-Indicator/TankLevel';
import { Button, Flex } from 'antd';
import {SwapLeftOutlined,SwapRightOutlined} from '@ant-design/icons'
import { useRef } from 'react';


const Secção1 = () => {

  const materiaPrima = [ 
    {
      label: "Matéria Prima A",
      value: "Materia Prima A",
    },
    {
      label:"Matéria Prima B",
      value:"Materia Prima B",
    },
    {
      label:"Matéria Prima C",
      value:"Materia Prima C"
    },
    {
      label:"Matéria Prima D",
      value:"Materia Prima D"
    },
    {
      label:"Matéria Prima E",
      value:"Materia Prima E"
    },
    {
      label:"Água",
      value:"Água"
    },
    
]

  const horizontalRef: any = useRef();

  const handleHorizontalScroll = (direction:string) => {
    if(direction === 'left') {
      horizontalRef ? (horizontalRef.current.scrollLeft -= 200) : null;
    }else{
      horizontalRef ? (horizontalRef.current.scrollLeft += 200) : null;
    }
  };

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
                  <TankLevel percent={0.40} title={'Tanque 1'} materiaPrima={materiaPrima[0].label}/>
                </div>
                <div>
                  <TankLevel percent={0.29} title={'Tanque 2'} materiaPrima={materiaPrima[3].label}/>
                </div>
                <div>
                  <TankLevel percent={0.65} title={'Tanque 3'} materiaPrima={materiaPrima[2].label}/>
                </div>
                <div>
                  <TankLevel percent={0.45} title={'Tanque 4'} materiaPrima={materiaPrima[5].label}/>
                </div>
                <div>
                  <TankLevel percent={0.97} title={'Tanque 5'} materiaPrima={materiaPrima[4].label}/>
                </div>
                <div>
                  <TankLevel percent={0.10} title={'Tanque 6'} materiaPrima={materiaPrima[1].label}/>
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
            <div className="card-body" style={{display:'inline-flex',flexDirection:'row' ,maxWidth:'100%', flexWrap:'wrap'}}>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Secção1;




/*
            <div className="card-body" style={{display:'flex',
            flexDirection:'row',
            maxWidth:'100%',
            flexWrap:'wrap',
            justifyContent:'space-evenly'}}>

*/
