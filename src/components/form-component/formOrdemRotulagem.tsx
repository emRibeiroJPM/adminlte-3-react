import {
  Button,
  Cascader,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
} from "antd";
import EscolherData from "./date-picker";
import { useState } from "react";
import ModalComponent from "../modal/ModalComponent";
import { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import PDFcomponent from "../pdfMaster/PDFcomponent";
import {UserOutlined} from "@ant-design/icons"
interface Iencomenda {
  tipoEmbalagem: string;
  operador: string;
  referencia: string;
  quantidadePaletes: number;
  cliente: string | [string, string];
  data: string | [string, string] | any;
  produtosPalete: string | number;
  lote: number;
}

const referênciasFormulário = [
  {
    id: 0,
    label: "Referência Receita A",
    referencia: "40020010",
  },
  {
    id: 1,
    label: "Referência Receita B",
    referencia: "40020020",
  },
  {
    id: 2,
    label: "Referência Receita C",
    referencia: "40020030",
  },
  {
    id: 3,
    label: "Referência Receita D",
    referencia: "40020040",
  },
  {
    id: 4,
    label: "Referência Receita E",
    referencia: "40020050",
  },
  {
    id: 5,
    label: "Referência Receita F",
    referencia: "40020060",
  },
  {
    id: 6,
    label: "Referência Receita G",
    referencia: "40020070",
  },
];

const clientesFormulário = [
  {
    value: "Região A",
    label: "Região A",
    children: [
      {
        value: "Cliente A",
        label: "Cliente A",
      },
      {
        value: "Cliente B",
        label: "Cliente B",
      },
      {
        value: "Cliente C",
        label: "Cliente C",
      },
    ],
  },
  {
    value: "Região B",
    label: "Região B",
    children: [
      {
        value: "Cliente A",
        label: "Cliente A",
      },
      {
        value: "Cliente B",
        label: "Cliente B",
      },
    ],
  },
];

const FormularioOrdemRotulagem = () => {
  let prevEncomenda = { Encomenda: {} };
  const [encomenda, setEncomenda] = useState<Iencomenda>({
    tipoEmbalagem: "",
    operador: "",
    referencia: "",
    quantidadePaletes: 0,
    cliente: "",
    data: "",
    produtosPalete: "",
    lote: 0,
  });
  const [form] = Form.useForm();
  const [modalAberto, setModalAberto] = useState(false);

  const handleAbrirModal = () => {
    setModalAberto(true);
  };

  const noFinalDoFormulario = async () => {
    prevEncomenda = await form.getFieldsValue(true);
    await setEncomenda((corpoObjeto) => ({
      ...corpoObjeto,
      ...prevEncomenda.Encomenda,
    }));
    //console.log("A data definida pela variavel dataHora é",dataHora)
    handleAbrirModal();
    //console.log(encomenda)
    //console.log(prevEncomenda);
  };

  const onFinish = async () => {
    await setEncomenda({ ...encomenda, data: dataHora });
    await noFinalDoFormulario()
      .then(() => console.log(encomenda))
      .then(() => {
        setModalAberto(false);
      })
      .finally(() =>
        console.log(
          `chegaste a funçao finally abrir modal esta a ${modalAberto}`
        )
      );
  };

  /////////////////////////////////////////////////////
  //Introduzir abaixo as propriedades e funcoes do Date Picker
  /////////////////////////////////////////////////////

  const [dataHora, setDataHora] = useState<string | [string, string]>();

  const onChange = (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
    setDataHora(dateString);
  };

  const onOk = (
    value: DatePickerProps["value"] | RangePickerProps["value"]
  ) => {
    console.log("onOk: ", value);
  };

  /////////////////////////////////////////////////////
  //Introduzir acima as propriedades e funcoes do Date Picker
  /////////////////////////////////////////////////////
  return (
    <>
      <div>
        <Form
          form={form}
          name="FormularioSec2"
          onFinish={onFinish}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          size={"middle"}
          autoComplete="true"
        >
          <Form.Item
            label="Tipo de Embalagem"
            name={["Encomenda", "tipoEmbalagem"]}
            rules={[
              { required: true, message: "Indique qual o tipo de embalagem" },
            ]}
          >
            <Radio.Group>
              <Radio.Button value="Tipo A">Tipo A</Radio.Button>
              <Radio.Button value="Tipo B">Tipo B</Radio.Button>
              <Radio.Button value="Tipo C">Tipo C</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Operador"
            name={["Encomenda", "operador"]}
            rules={[
              { required: true, message: "Indique qual o nome do operador" },
            ]}
          >
            <Input addonBefore={<UserOutlined />} maxLength={10} count={{show:true,max:10}} placeholder="Nome do Operador"/>
          </Form.Item>
          <Form.Item
            label="Referência"
            name={["Encomenda", "referencia"]}
            rules={[
              {
                required: true,
                message: "Indique qual a referência da receita",
              },
            ]}
          >
            <Select placeholder="Referencia OR (Orderm Rotulagem)">
              {referênciasFormulário.map((item) => {
                return (
                  <Select.Option key={item.id} value={item.referencia}>
                    {item.label}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item
            label="Nr Total de Paletes"
            name={["Encomenda", "quantidadePaletes"]}
            rules={[
              { required: true, message: "Indique qual o numero de paletes" },
            ]}
          >
            <InputNumber min={1} placeholder="1"/>
          </Form.Item>
          <Form.Item
            label="Cliente"
            name={["Encomenda", "cliente"]}
            rules={[
              { required: true, message: "Indique qual o nome do cliente" },
            ]}
          >
            <Cascader options={clientesFormulário} placeholder="Cliente destinatário" />
          </Form.Item>
          <Form.Item label="Data" name={["Encomenda", "data"]} rules={[{}]}>
            <EscolherData funcaoParaOK={onOk} funcaoParaOnChange={onChange} />
          </Form.Item>
          <Form.Item
            label="Produtos p/ Palete"
            name={["Encomenda", "produtosPalete"]}
            rules={[
              {
                required: true,
                message: "Indique quantos produtos exitem por palete",
              },
            ]}
          >
            <InputNumber min={1} placeholder="1"/>
          </Form.Item>
          <Form.Item
            label="Lote"
            name={["Encomenda", "lote"]}
            rules={[
              { required: true, message: "Indique qual o número do lote" },
            ]}
          >
            <InputNumber min={1} placeholder="1"/>
          </Form.Item>
          <Form.Item label="Submeter">
            <Button className="" htmlType="submit">
              Submeter
            </Button>
          </Form.Item>
        </Form>
        <div style={{ marginLeft: "15%" }}>
          <PDFcomponent {...encomenda} />
        </div>
        <ModalComponent abrirModal={modalAberto} embalagem={encomenda} />
      </div>
    </>
  );
};

export default FormularioOrdemRotulagem;
