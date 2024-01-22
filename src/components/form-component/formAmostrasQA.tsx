import {
  Button,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Tooltip,
  DatePicker,
  Slider,
  Row,
  Checkbox,
  Col
} from "antd";
import { useState } from "react";
import ModalComponent from "../modal/ModalComponentAmostraQA";
import EscolherData from "./date-picker";
import { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import { UserOutlined } from "@ant-design/icons";

interface IamostraControloQualidade {
  referencia: string;
  lote: number;
  dataFabrico: string;
  dataInicio: string;
  dataFim: string;
  ListaEspecificacoes: string | any;
  metodos: string | any;
  intervaloDeAceitacao: string;
  resultados: string;
  avaliacaoConformidade: string;
  operadorAnalisa: string;
  operadorValida: string;
  observacoes: string;
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

const FormularioAmostrasQA = () => {
  const { TextArea } = Input;
  let prevEncomenda = { Encomenda: {} };
  const [ordemEnchimento, setOrdemEnchimento] =
    useState<IamostraControloQualidade>({
      referencia: "",
      lote: 0,
      dataFabrico: "",
      dataInicio: "",
      dataFim: "",
      ListaEspecificacoes: "",
      metodos: "",
      intervaloDeAceitacao: "",
      resultados: "",
      avaliacaoConformidade: "",
      operadorAnalisa: "",
      operadorValida: "",
      observacoes: "",
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
    handleAbrirModal();
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

  const onOk = (dateString: [string, string] | string | any) => {
    console.log("onOk: ", dateString.toLocaleString());
  };

  const onChange = (dateString: [string, string] | string | any) => {
    console.log("this is onChange", dateString);
  };
  /////////////////////////////////////////////////////
  //Introduzir abaixo as propriedades e funcoes do Date Picker
  /////////////////////////////////////////////////////

  const [dataHora, setDataHora] = useState<string | [string, string]>();

  const onChangeAnalise = (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
    setDataHora(dateString);
  };

  const onOkAnalise = (
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
          name="FormularioAmostra"
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
                message: "Indique qual a referência da amostra",
              },
            ]}
          >
            <Select placeholder="Referencia Amostra">
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
            label="Data de Fabrico"
            name={["Encomenda", "dataFabrico"]}
            rules={[
              {
                required: true,
                message:
                  "Introduza a hora de fabrico no qual foi produzida a amostra",
              },
            ]}
          >
            <DatePicker
              showTime={{ format: "HH:mm" }}
              format="YYYY-MM-DD HH:mm"
              onChange={onChange}
              onOk={onOk}
              placeholder="Data de Fabrico da Amostra"
            />
          </Form.Item>
          <Form.Item
            label="Data de Analise"
            name={["Encomenda", "DataInicioFim"]}
            rules={[]}
          >
            <EscolherData
              funcaoParaOK={onOkAnalise}
              funcaoParaOnChange={onChangeAnalise}
            />
          </Form.Item>
          <Form.Item
            label="Lista de Especificações:"
            name={["Encomenda", "listaEspecificações"]}
          >
          <Checkbox.Group style={{ width: '100%' }} onChange={()=>{}}>
          <Row>
            <Col span={8}>
              <Checkbox value="SpecA">Especificação A</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="SpecB">Especificação B</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="SpecC">Especificação C</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="SpecD">Especificação D</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="SpecE">Especificação E</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="SpecF">Especificação F</Checkbox>
            </Col>
          </Row>
          </Checkbox.Group>
          </Form.Item>
          <Form.Item
            label="Métodos:"
            name={["Encomenda", "metodos"]}
          ></Form.Item>
          <Form.Item
            label="Intervalo de aceitação pH:"
            name={["Encomenda", "intervaloAceitacao"]}
          >
            <Slider
              marks={{
                1: {
                  style: {
                    color: "#E1691A",
                  },
                  label: <strong>pH=1</strong>,
                },
                7: {
                  style: {
                    color: "#3EAA42",
                  },
                  label: <strong>pH=7</strong>,
                },
                14: {
                  style: {
                    color: "#3E2B96",
                  },
                  label: <strong>pH=14</strong>,
                },
              }}
              range={{ draggableTrack: true }}
              step={0.1}
              min={0}
              max={14}
              defaultValue={[4, 14]}
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item
            label="Resultado:"
            name={["Encomenda", "resultado"]}
          ></Form.Item>
          <Form.Item
            label="Avaliação da conformidade:"
            name={["Encomenda", "avaliacao"]}
          >
            <Radio.Group name="radiogroup" defaultValue={1}>
              <Radio value={"conforme"}>Conforme</Radio>
              <Radio value={"naConforme"}>Não Conforme</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Analisador:"
            name={["Encomenda", "operadorAnalisa"]}
          >
            <Input
              addonBefore={<UserOutlined />}
              maxLength={10}
              count={{ show: true, max: 10 }}
              placeholder="Operador que analisa"
            />
          </Form.Item>
          <Form.Item label="Validador:" name={["Encomenda", "operadorValida"]}>
            <Input
              addonBefore={<UserOutlined />}
              maxLength={10}
              count={{ show: true, max: 10 }}
              placeholder="Operador que valida"
            />
          </Form.Item>
          <Form.Item label="Observações:" name={["Encomenda", "observacoes"]}>
            <TextArea
              showCount
              autoSize={{ minRows: 3, maxRows: 10 }}
              allowClear
              maxLength={255}
              placeholder="Observações"
              style={{ height: 120, resize: "none" }}
            />
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

export default FormularioAmostrasQA;
