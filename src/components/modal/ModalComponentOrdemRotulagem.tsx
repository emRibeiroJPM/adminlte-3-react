import { useEffect, useState } from "react";
import ToastComponent from "../toasterComponent/toastComponent";
import { Modal } from "antd";
import axios from 'axios';

interface result {
  abrirModal: boolean;
  ordemRotulagem: conteudo;
}

interface conteudo {
  referencia: string,
  lote: number,
  tipoEmbalagem: string,
  loteEmbalagem: number,
  tipoTampa: string,
  loteTampa: number,
  operador: string,
  horaInicio: string,
  horaFim:string,
  maquinaEnchimento:string
}

function ModalComponent({ abrirModal, ordemRotulagem }: result) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [foiMandadoAbrir, setFoiMandadoAbrir] = useState<boolean>(false);
  const [toast, setToast] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleEnvioInformacao = async (informacao:any) => {
    const {data} = await axios.post('http://localhost:3000/ordemEnchimento/novaOrdem',informacao,{headers:{
      "Content-Type":"application/json"
    }})
    //console.log(data)
  };

  const handleOK = () => {
    //console.log("pressionaste o ok")
    setOpen(false);
    setFoiMandadoAbrir(false);
    abrirModal = false;
    //console.log("4: handleOk the isOpen Var",isOpen)
    
    try {
      handleEnvioInformacao(ordemRotulagem).then(() => {
        console.log("Info enviada com Sucesso");
      }).then(()=>{setToast(true);})
      setTimeout(() => setToast(false), 1000);
    } catch (error) {
      console.error("houve um erro a enviar a informação");
    }
    
  };

  const handleCancel = () => {
    //console.log("pressionaste o cancel")
    setOpen(false);
    setFoiMandadoAbrir(false);
    abrirModal = false;
    //console.log("5: handleCancel the isOpen Var",isOpen);
  };

  useEffect(() => {
    if (abrirModal) {
      setFoiMandadoAbrir(true);
    }
  }, [foiMandadoAbrir, abrirModal]);

  useEffect(() => {
    //console.log("6: no useEffect do FMA  isOpen",isOpen)
    //console.log("7: no useEffect do FMA foiMandadoAbrir",foiMandadoAbrir)

    if (foiMandadoAbrir) {
      handleOpenModal();
    }
    return () => {
      setFoiMandadoAbrir(false);
    };
  }, [foiMandadoAbrir]);

  return (
    <>
      <Modal title="" open={isOpen} onOk={handleOK} onCancel={handleCancel}>
        <h4>Confirma que os seguintes dados estão corretos:</h4>
        <br />
        <p>
          <b> Referencia ⇒</b> {ordemRotulagem.referencia}
        </p>
        <p>
          <b>Lote ⇒</b> {ordemRotulagem.lote}
        </p>
        <p>
          <b>Tipo de Embalagem ⇒ </b>
          {ordemRotulagem.tipoEmbalagem}
        </p>
        <p>
          <b>Lote de Embalagem ⇒</b> {ordemRotulagem.loteEmbalagem}
        </p>
        <p>
          <b>Tipo de Tampa ⇒</b> {ordemRotulagem.tipoTampa}
        </p>
        <p>
          <b>Lote Tampa ⇒</b> {ordemRotulagem.loteTampa}
        </p>
        <p>
          <b>Operador ⇒</b> {ordemRotulagem.operador}
        </p>
        <p>
          <b>
            Data ⇒&emsp;<em>Inicio: </em>
          </b>
          {ordemRotulagem.horaInicio}
          <b>
            <em>&emsp;Fim: </em>
          </b>{" "}
          {ordemRotulagem.horaFim}{" "}
        </p>
        <p>
          <b>Maquina de Enchimento ⇒</b> {ordemRotulagem.maquinaEnchimento}
        </p>
      </Modal>
      {toast ? (
        <ToastComponent
          estado="success"
          mensagem="Operação realizada com sucesso!"
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default ModalComponent;
