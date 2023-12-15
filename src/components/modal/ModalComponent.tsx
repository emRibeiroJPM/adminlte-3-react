import { useEffect, useState } from 'react';
import ToastComponent from '../toasterComponent/toastComponent';
import { Modal } from 'antd';

interface result {
  abrirModal : boolean 
  embalagem : conteudo
}

interface conteudo{
  tipoEmbalagem : "" | string,
  operador: "" | string,
  referencia: "" | string,
  quantidadePaletes: "" | string,
  cliente: "" | string,
  data: any,
  produtosPalete: "" | string,
  lote: "" | string
}

function ModalComponent({abrirModal,embalagem}:result) {
  
  const [isOpen,setOpen] = useState<boolean>(false)
  const [foiMandadoAbrir,setFoiMandadoAbrir] = useState<boolean>(false)
  const [toast, setToast] = useState<boolean>(false)

  console.log("1: No inicio da funçaothe isOpen Var",isOpen);
  console.log("2: No inicio da funçao the foiMandadoAbrir Var ",foiMandadoAbrir)

  const handleOpenModal = () =>{
    setOpen(true)
  }

  const handleOK = () => {
    console.log("pressionaste o ok")
    setOpen(false)
    setFoiMandadoAbrir(false)
    abrirModal=false
    console.log("4: handleOk the isOpen Var",isOpen)
    setToast(true)
    setTimeout(()=>setToast(false),1000)
  }
  
  const handleCancel = () => {
    console.log("pressionaste o cancel")
    setOpen(false)
    setFoiMandadoAbrir(false)
    abrirModal=false;
    console.log("5: handleCancel the isOpen Var",isOpen);
  }

  useEffect(()=>{
    if(abrirModal){
      setFoiMandadoAbrir(true)
    }
  },[foiMandadoAbrir,abrirModal])   

  useEffect(()=>{
    console.log("6: no useEffect do FMA  isOpen",isOpen)
    console.log("7: no useEffect do FMA foiMandadoAbrir",foiMandadoAbrir)

    if(foiMandadoAbrir){
      handleOpenModal();
    }
    return ()=> {
      setFoiMandadoAbrir(false)
    }
  },[foiMandadoAbrir]);

  return (<><Modal title="" open={isOpen} onOk={handleOK} onCancel={handleCancel}>
  <h5>Confirma que os seguintes dados estão corretos:</h5>
  <p>Tipo de Embalagem: {embalagem.tipoEmbalagem}</p>
  <p>Operador: {embalagem.operador}</p>
  <p>Referência: {embalagem.referencia}</p>
  <p>Quantidade de Paletes: {embalagem.quantidadePaletes}</p>
  <p>Cliente: {embalagem.cliente}</p>
  <p>Data: {embalagem.data}</p>
  <p>Quantidade de Produtos p/ Palete: {embalagem.produtosPalete}</p>
  <p>Lote: {embalagem.lote}</p>
</Modal>{
  toast ? <ToastComponent estado='success' mensagem='Operação realizada com sucesso!'/> : <></>
}
</>)
}

export default ModalComponent

