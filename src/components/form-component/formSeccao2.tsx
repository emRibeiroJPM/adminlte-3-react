import {
    Button,
    Cascader,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
  } from 'antd';
import EscolherData from './date-picker';
import CodigoQR from '../codigoQR/qrCode-component';
import { useState } from 'react';
import ModalComponent from '../modal/ModalComponent';
  
const referênciasFormulário = [
  {
    label: "Referência Receita A",
    referencia:"40020010",
  },
  {
    label: "Referência Receita B",
    referencia:"40020020",
  },
  {
    label: "Referência Receita C",
    referencia:"40020030",
  },
  {
    label: "Referência Receita D",
    referencia:"40020040",
  }
]

const clientesFormulário = [
  {
    value: 'Região A',
    label: 'Região A',
    children: [
      {
        value: 'Cliente A',
        label: 'Cliente A',
      },
      {
        value: 'Cliente B',
        label: 'Cliente B',
      },
      {
        value: 'Cliente C',
        label: 'Cliente C',
      }
    ],
  },
  {
    value: 'Região B',
    label: 'Região B',
    children: [
      {
        value: 'Cliente A',
        label: 'Cliente A',
      },
      {
        value: 'Cliente B',
        label: 'Cliente B',
      },
    ],
  }
]

let Encomenda = {
  tipoEmbalagem : "",
  operador: "",
  referencia: "",
  quantidadePaletes: "",
  cliente: "",
  data: "",
  produtosPalete: "",
  lote: ""

}

//const [encomenda,setEncomenda] = useState();

const FormularioSeccaoDois = () => {
  
  const [form] = Form.useForm();
  
  const onFinish = async () =>{
    //console.log(`Received these values: ${values}`);
    //setEncomenda(form.getFieldsValue(true));
    Encomenda = await form.getFieldsValue(true);
    console.log(Encomenda);

    
  }
    return (<><Form
          form={form}
          name='FormularioSec2'
          onFinish={onFinish}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          size={"middle"}
          autoComplete='true'
          
        >
          <Form.Item label="Tipo de Embalagem" name={["Encomenda","tipoEmbalagem"]} rules={[{required:true,message:"Indique qual o tipo de embalagem"}]}>
            <Radio.Group>
              <Radio.Button value="Tipo A">Tipo A</Radio.Button>
              <Radio.Button value="Tipo B">Tipo B</Radio.Button>
              <Radio.Button value="Tipo C">Tipo C</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Operador" name={["Encomenda","operador"]} rules={[{required:true,message:"Indique qual o nome do operador"}]}>
            <Input />
          </Form.Item>
          <Form.Item label="Referência" name={["Encomenda","referencia"]} rules={[{required:true,message:"Indique qual a referência da receita"}]}>
            <Select onChange={({})=>{}}>
              {referênciasFormulário.map((item)=>{
                return(<Select.Option value={item.label}>{item.referencia}</Select.Option>)
                })}
            </Select>
          </Form.Item>
          <Form.Item label="Nr Total de Paletes" name={["Encomenda","quantidadePaletes"]} rules={[{required:true,message:"Indique qual o numero de paletes"}]}>
            <InputNumber />
          </Form.Item>
          <Form.Item label="Cliente" name={["Encomenda","cliente"]} rules={[{required:true,message:"Indique qual o nome do cliente"}]}>
            <Cascader options={clientesFormulário}/>
          </Form.Item>
          <Form.Item label="Data" name={["Encomenda","data"]} rules={[]}>
            <EscolherData/>
          </Form.Item>
          <Form.Item label="Produtos p/ Palete" name={["Encomenda","produtosPalete"]} rules={[{required:true,message:"Indique quantos produtos exitem por palete"}]}>
            <InputNumber />
          </Form.Item>
          <Form.Item label="Lote" name={["Encomenda","lote"]} rules={[{required:true,message:"Indique qual o número do lote"}]}>
            <InputNumber />
          </Form.Item>
          <Form.Item label="Submeter">
            <Button htmlType="submit" onClick={()=>{<ModalComponent/>}}>Submeter</Button>
          </Form.Item>
        </Form>
        <div style={{marginLeft:"15%"}}>
          <CodigoQR informacaoAInserir={Encomenda}/>
        </div>
    </>);
    };

export default FormularioSeccaoDois