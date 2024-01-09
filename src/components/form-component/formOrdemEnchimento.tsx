import {
  Button,
  Flex,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Tooltip,
} from "antd";
import { useState } from "react";
import ModalComponent from "../modal/ModalComponentOrdemRotulagem";
import { FieldTimeOutlined, InfoCircleOutlined,UserOutlined } from "@ant-design/icons";

interface IordemEnchimento {
  referencia: string;
  lote: number;
  tipoEmbalagem: string;
  loteEmbalagem: number;
  tipoTampa: string;
  loteTampa: number;
  operador: string;
  horaInicio: string;
  horaFim: string;
  maquinaEnchimento: string;
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

const FormularioOrdemEnchimento = () => {
  let prevEncomenda = { Encomenda: {} };
  const [ordemEnchimento, setOrdemEnchimento] = useState<IordemEnchimento>({
    referencia: " ",
    lote: 0,
    tipoEmbalagem: " ",
    loteEmbalagem: 0,
    tipoTampa: " ",
    loteTampa: 0,
    operador: " ",
    horaInicio: " ",
    horaFim: " ",
    maquinaEnchimento: "",
  });
  const [form] = Form.useForm();
  const [modalAberto, setModalAberto] = useState(false);

  const handleAbrirModal = () => {
    setModalAberto(true);
  };

  const noFinalDoFormulario = async () => {
    prevEncomenda = await form.getFieldsValue(true);
    await setOrdemEnchimento((corpoObjeto) => ({
      ...corpoObjeto,
      ...prevEncomenda.Encomenda,
    }));
    //console.log("A data definida pela variavel dataHora é",dataHora)
    handleAbrirModal();
    //console.log(encomenda)
    //console.log(prevEncomenda);
  };

  const onFinish = async () => {
    await setOrdemEnchimento({ ...ordemEnchimento });
    await noFinalDoFormulario()
      .then(() => console.log(ordemEnchimento))
      .then(() => {
        setModalAberto(false);
      })
      .finally(() =>
        console.log(
          `chegaste a funçao finally abrir modal esta a ${modalAberto}`
        )
      );
  };

  const DataFunc = () => {
    let date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${year}-${month + 1 < 10 ? "0" + (month + 1) : month}-${
      day < 10 ? "0" + day : day
    } ${hours}:${minutes < 10 ? "0"+(minutes) : minutes}`;
  };

  const DataAtual: any = DataFunc();

  const [horaInicio, setHoraInicio] = useState<any>();
  const [horaInicioState, setHoraInicioState] = useState(false);
  const [horaFim, setHoraFim] = useState<any>();
  const [horaFimState, setHoraFimState] = useState(false);

  const obterHoraInicioHandler = () => {
    if (!horaFimState) {
      setHoraInicio(DataAtual);
      //Settar hora de inicio para true para habilitar o "clique" da hora final
      setHoraInicioState(true);
    }
  };

  const obterHoraFimHandler = () => {
    if (horaInicioState) {
      setHoraFim(DataAtual);
      //Atualizar estado da hora de fecho para true
      //De maneira a bloquear hora de inicio
      setHoraFimState(true);
    } else {
      console.log("Selecione uma hora de inicio primeiro!!");
    }
  };

  return (
    <>
      <div>
        <Form
          form={form}
          name="FormularioSec3"
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
            <Select placeholder="Referencia OE (Orderm Enchimento)">
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
            <InputNumber min={1} placeholder="1" />
          </Form.Item>
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
              <Radio.Button value="Tipo D">Tipo D</Radio.Button>
              <Radio.Button value="Tipo E">Tipo E</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Lote Embalagem"
            name={["Encomenda", "loteEmbalagem"]}
            rules={[
              { required: true, message: "Indique qual o número do lote" },
            ]}
          >
            <InputNumber min={1} placeholder="1" />
          </Form.Item>

          <Form.Item
            label="Tipo de Tampa"
            name={["Encomenda", "tipoTampa"]}
            rules={[
              { required: true, message: "Indique qual o tipo de Tampa" },
            ]}
          >
            <Radio.Group>
              <Radio.Button value="Tipo A">Tipo A</Radio.Button>
              <Radio.Button value="Tipo B">Tipo B</Radio.Button>
              <Radio.Button value="Tipo C">Tipo C</Radio.Button>
              <Radio.Button value="Tipo D">Tipo D</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Lote Tampa"
            name={["Encomenda", "loteTampa"]}
            rules={[
              { required: true, message: "Indique qual o número do lote" },
            ]}
          >
            <InputNumber min={1} placeholder="1" />
          </Form.Item>
          <Form.Item
            label="Operador"
            name={["Encomenda", "operador"]}
            rules={[
              { required: true, message: "Indique qual o nome do operador" },
            ]}
          >
            <Input
              addonBefore={<UserOutlined/>}
              maxLength={10}
              count={{ show: true, max: 10 }}
              placeholder="Nome do Operador"
            />
          </Form.Item>
          <Form.Item
            label="Data Hora de Inicio"
            name={["Encomenda", "horaInicio"]}
            rules={[
              { required: true, message: "Introduza uma hora de Inicio" },
            ]}
          >
            <Flex gap="middle">
              <Button
                type="primary"
                shape="circle"
                onClick={obterHoraInicioHandler}
              >
                {`->`}
              </Button>
              <Input
                addonBefore={<FieldTimeOutlined />}
                placeholder="Hora de Inicio"
                value={horaInicio}
                suffix={
                  <Tooltip title="Deverá inserir este previamente do hora fim">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>
                }
              />
            </Flex>
          </Form.Item>
          <Form.Item
            label="Data Hora de Fim"
            name={["Encomenda", "horaFim"]}
            rules={[{ required: true, message: "Introduza uma hora de fim" }]}
          >
            <Flex gap="middle">
              <Button
                type="primary"
                shape="circle"
                onClick={obterHoraFimHandler}
              >
                {`->`}
              </Button>
              <Input
                addonBefore={<FieldTimeOutlined />}
                placeholder="Hora de Fim"
                value={horaFim}
                suffix={
                  <Tooltip title="Deverá inserir este após do hora inicio">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>
                }
              />
            </Flex>
          </Form.Item>
          <Form.Item
            label="Maquina de Enchimento"
            name={["Encomenda", "maquinaEnchimento"]}
            rules={[
              { required: true, message: "Indique qual a maquina utilizada" },
            ]}
          >
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
        <div style={{ marginLeft: "15%" }}></div>
        <ModalComponent
          abrirModal={modalAberto}
          ordemRotulagem={ordemEnchimento}
        />
      </div>
    </>
  );
};

export default FormularioOrdemEnchimento;
