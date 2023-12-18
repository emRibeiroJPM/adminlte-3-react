import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export interface SmallBoxProps {
  type: 'info' | 'success' | 'warning' | 'danger';
  icon?: string;
  count: number;
  title: string;
  navigateTo: string;
}


const SmallBox = ({
  type = 'info',
  icon = 'ion-stats-bars',
  count,
  title,
  navigateTo
}: SmallBoxProps) => {
  const [t] = useTranslation();
  const [estado,setEstado] = useState('success');

  
  useEffect(()=>{
    if(count <= 100){
      setEstado('success');
    }
    if(count < 50 && count > 24){
      setEstado('warning')
      toast.warn(`A ${title} está numa condição anormal, tome as devidas precauções`, {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })
    }
    if(count < 25){
      setEstado('danger');
      toast.error(`Alerta a ${title} está em estado grave, verifique a qual a anomalia!!`, {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    }) 
    }
  },[count]);
  
  return (
    <>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    <ToastContainer />
    <div className={`small-box bg-${estado}`}>
      <div className="inner">
        <h3>
          {count}<sup style={{fontSize: '20px'}}>%</sup>
        </h3>
        <p>{title}</p>
      </div>
      <div className="icon">
        <i className={`ion ${icon}`}/>
      </div>
      <Link to={navigateTo} className="small-box-footer">
        <span className="mr-2">{t<string>('main.label.moreInfo')}</span>
        <i className="fa fa-arrow-circle-right" />
      </Link>
    </div>
    </>
  );
};

export default SmallBox;
