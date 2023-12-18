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

  //console.log("1: No inicio da funçaothe isOpen Var",isOpen);
  //console.log("2: No inicio da funçao the foiMandadoAbrir Var ",foiMandadoAbrir)

  const handleOpenModal = () =>{
    setOpen(true)
  }

  const handleOK = () => {
    //console.log("pressionaste o ok")
    setOpen(false)
    setFoiMandadoAbrir(false)
    abrirModal=false
    //console.log("4: handleOk the isOpen Var",isOpen)
    setToast(true)
    setTimeout(()=>setToast(false),1000)
  }
  
  const handleCancel = () => {
    //console.log("pressionaste o cancel")
    setOpen(false)
    setFoiMandadoAbrir(false)
    abrirModal=false;
    //console.log("5: handleCancel the isOpen Var",isOpen);
  }

  useEffect(()=>{
    if(abrirModal){
      setFoiMandadoAbrir(true)
    }
  },[foiMandadoAbrir,abrirModal])   

  useEffect(()=>{
    //console.log("6: no useEffect do FMA  isOpen",isOpen)
    //console.log("7: no useEffect do FMA foiMandadoAbrir",foiMandadoAbrir)

    if(foiMandadoAbrir){
      handleOpenModal();
    }
    return ()=> {
      setFoiMandadoAbrir(false)
    }
  },[foiMandadoAbrir]);

  return (<><Modal title="" open={isOpen} onOk={handleOK} onCancel={handleCancel}>
  <h4>Confirma que os seguintes dados estão corretos:</h4>
  <br />
  <p><b>Tipo de Embalagem ⇒</b> {embalagem.tipoEmbalagem}</p>
  <p><b>Operador ⇒</b> {embalagem.operador}</p>
  <p><b>Referência ⇒ </b>{embalagem.referencia}</p>
  <p><b>Quantidade de Paletes ⇒</b> {embalagem.quantidadePaletes} paletes</p>
  <p><b>Cliente ⇒</b> {embalagem.cliente[1]}</p>
  <p><b>Data ⇒&emsp;<em>Inicio: </em></b>{embalagem.data[0]}<b><em>&emsp;Fim: </em></b> {embalagem.data[1]} </p>
  <p><b>Quantidade de Produtos p/ Palete ⇒</b> {embalagem.produtosPalete}</p>
  <p><b>Lote ⇒</b> {embalagem.lote}</p>
</Modal>{
  toast ? <ToastComponent estado='success' mensagem='Operação realizada com sucesso!'/> : <></>
}
</>)
}

export default ModalComponent

