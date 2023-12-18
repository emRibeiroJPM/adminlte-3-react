import {Liquid} from '@ant-design/plots'
import ToastComponent from '../toasterComponent/toastComponent';
import { useState,useEffect } from 'react';

interface TankProp {
  percent : number
  title : string
  materiaPrima?: string
}


interface ColorProps {
  cor : string
}

function TankLevel({percent,title,materiaPrima}:TankProp) {
  
  const [color, setColor] = useState<ColorProps['cor']>("#2c8afc")

    return(<>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginLeft:'-15%',marginRight:'-15%',marginBottom:'10%'}}>
            <h4>{title}</h4>
            <Liquid 
            percent={percent}
            style={{
              shape: 'pin',
              textFill:`${color}`,
              outlineBorder: 7,
              outlineDistance: 8,
              waveLength: 400,
            }}/>
            <div style={{border:'1px solid #dedede', borderRadius:'5px', alignItems:'center', paddingLeft:'5%',paddingRight:'5%',paddingTop:'1.5%'}}>
              <p>{materiaPrima}</p>
            </div>
      </div>
      <div>
        {percent < 0.15 ? <ToastComponent estado='warning' mensagem={`Alerta ${materiaPrima} abaixo dos 15%`}/> : <></>}
      </div>
    </>)
};
export default TankLevel;
