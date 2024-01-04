import {
    Button,
    Cascader,
    Flex,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
  } from "antd";
  import { useState } from "react";
  import ModalComponent from "../modal/ModalComponent";
  import { DatePicker } from "antd";
  import { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
  import PDFcomponent from "../pdfMaster/PDFcomponent";
  import { FieldTimeOutlined} from '@ant-design/icons';

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
  
  const FormularioSeccaoTres = () => {
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
      await setEncomenda({ ...encomenda});
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
              label="Referência"
              name={["Encomenda", "referencia"]}
              rules={[
                {
                  required: true,
                  message: "Indique qual a referência da receita",
                },
              ]}
            >
              <Select>
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
              label="Lote"
              name={["Encomenda", "lote"]}
              rules={[
                { required: true, message: "Indique qual o número do lote" },
              ]}
            >
              <InputNumber min={1}/>
            </Form.Item>
            <Form.Item
              label="Tipo de Embalagem"
              name={["Encomenda", "tipoEmbalagem"]}
              rules={[
                { required: true, message: "Indique qual o tipo de embalagem" },
              ]}
            >
              <Radio.Group>
                <Radio.Button value="Embalagem A">Embalagem A</Radio.Button>
                <Radio.Button value="Embalagem B">Embalagem B</Radio.Button>
                <Radio.Button value="Embalagem C">Embalagem C</Radio.Button>
                <Radio.Button value="Embalagem D">Embalagem D</Radio.Button>
                <Radio.Button value="Embalagem E">Embalagem E</Radio.Button>
              </Radio.Group>

            </Form.Item>
              <Form.Item
              label="Lote Embalagem"
              name={["Encomenda", "loteEmbalagem"]}
              rules={[
                { required: true, message: "Indique qual o número do lote" },
              ]}
            >
              <InputNumber min={1} />
            </Form.Item>

            <Form.Item
              label="Tipo de Tampa"
              name={["Encomenda", "tipoTampa"]}
              rules={[
                { required: true, message: "Indique qual o tipo de Tampa" },
              ]}
            >
              <Radio.Group>
                <Radio.Button value="Tampa A">Tampa A</Radio.Button>
                <Radio.Button value="Tampa B">Tampa B</Radio.Button>
                <Radio.Button value="Tampa C">Tampa C</Radio.Button>
                <Radio.Button value="Tampa D">Tampa D</Radio.Button>
              </Radio.Group>

            </Form.Item>
              <Form.Item
              label="Lote Tampa"
              name={["Encomenda", "loteTampa"]}
              rules={[
                { required: true, message: "Indique qual o número do lote" },
              ]}
            >
              <InputNumber min={1} />
            </Form.Item>
            <Form.Item
              label="Operador"
              name={["Encomenda", "operador"]}
              rules={[
                { required: true, message: "Indique qual o nome do operador" },
              ]}
            >
              <Input count={{show:true, max:10}} placeholder="Nome do Operador" />
            </Form.Item>
            <Form.Item
                label="Data Hora de Inicio"
                name={["Encomenda","horaInicio"]}
                rules={[{required:true,message:"Introduza uma hora de inicio"}]}>
                <Flex gap="middle">
                    <Button type="primary" shape="circle">
                    {`->`}
                    </Button>
                <Input addonBefore={<FieldTimeOutlined/>} placeholder="Hora de Inicio" />
                </Flex>
            </Form.Item>
                <Form.Item
                    label="Data Hora de Fim"
                    name={["Encomenda","horaFim"]}
                    rules={[{required:true,message:"Introduza uma hora de fim"}]}>
                <Flex gap="middle">
                    <Button type="primary" shape="circle">
                    {`->`}
                    </Button>
                    <Input addonBefore={<FieldTimeOutlined/>} placeholder="Hora de Fim" />
                </Flex>
                </Form.Item>
            <Form.Item 
                label="Maquina de Enchimento"
                name={["Encomenda", "maquinaEnchimento"]}
                rules={[{required:true,message:"Indique qual a maquina utilizada"}]}>
            <Radio.Group>
                <Radio value="maquina1">Maquina 1</Radio>
                <Radio value="maquina2">Maquina 2</Radio>
                <Radio value="maquina3">Maquina 3</Radio>
            </Radio.Group>
            </Form.Item>
            <Form.Item label="Submeter">
              <Button type="primary" htmlType="submit">
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
  
  export default FormularioSeccaoTres;
  