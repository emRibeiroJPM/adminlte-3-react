import {Liquid} from '@ant-design/plots'
import ToastComponent from '../toasterComponent/toastComponent';
import {useEffect } from 'react';
import {useState } from 'react';

interface TankProp {
  percent : number
  title : string
  materiaPrima?: string
}
interface estadoTanques {
  estado : false | true
}

function TankLevel({percent,title,materiaPrima}:TankProp) {
  
  const [estado,setEstado] = useState<estadoTanques['estado']>(false)

  const handleEstado = async (percentagem : number) =>{
    if(percentagem < 0.15){
      setEstado(true)
      //console.log("o estado foi colocado a true")
      return;
    }
    setEstado(false)
    //console.log("o estado foi colocado a false")
  }
     
  useEffect(() =>{
    handleEstado(percent);
    //console.log("o percent foi atualizado")
  },[percent])
    
    return(<>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginLeft:'-30%',marginRight:'-30%',marginBottom:'2px'}}>
            <h4>{title}</h4>
            <Liquid 
            percent={percent}
            style={{
              shape: 'pin',
              textFill: '#343a40',
              outlineBorder: 7,
              outlineDistance: 8,
              waveLength: 400,
            }}/>
            <div style={{border:'1px solid #dedede', borderRadius:'5px', alignItems:'center', paddingLeft:'5%',paddingRight:'5%',paddingTop:'1.5%'}}>
              <p>{materiaPrima}</p>
            </div>
            <div>
              { estado === true ? <ToastComponent estado='warning' mensagem={`Alerta ${materiaPrima} está a 15% ou menos!`}/> : <></>}
            </div>
      </div>
    </>)
};
export default TankLevel;