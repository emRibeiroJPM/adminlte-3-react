import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

interface toasterUserProps {
    titulo: string,
    estado: 'warning' | 'error' | 'success'
}

function toastComponent({titulo,estado}:toasterUserProps) {
    const notificacao = () =>{
        if(estado == 'error'){
            toast.error(`Alerta a ${titulo} está em estado grave!!!!!!`, {
                position: "top-right",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }

        if(estado == 'warning'){
            toast.error(`A ${titulo} está numa condição anormal, tome as devidas precauções`, {
                position: "top-right",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
    }
  return (<><ToastContainer/>{notificacao()}</>)
}

export default toastComponent