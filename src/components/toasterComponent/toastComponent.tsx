import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

interface toasterUserProps {
    estado: 'warning' | 'error' | 'success'
    mensagem?: string | undefined
}

function ToastComponent({estado,mensagem}:toasterUserProps) {
    const notificacao = () =>{
        if(estado == 'error'){
            toast.error(`${mensagem}`,{
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
            toast.error(`${mensagem}`, {
                position: "top-right",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }

        if(estado == 'success'){
            toast.success(`${mensagem}`, {
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

export default ToastComponent