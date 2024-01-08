import { MDBDataTable } from "mdbreact";
import { useEffect, useState } from "react";

interface TipoDeDados {
  formId: any;
  TipoEmbalagem: any;
  Operador: any;
  Referencia: any;
  QtdPaletes: any;
  Cliente: any;
  DataInicio: any;
  DataFim: any;
  QtdProdutosPalete: any;
  Lote: any;
}

function TableComponentSec3() {
  const [dadosObtidos, setDadosObtidos] = useState<TipoDeDados[]>([]);

  const obtencaoDados = () => {
    //dados do tipo Date,scale
    fetch("http://localhost:3000/ordensEnchimento")
      .then((response) => response.json())
      .then((json) => setDadosObtidos(json))
      .catch((error) => {
        console.log("falha na obtençao de dados", error);
      });
  };
  useEffect(() => {
    obtencaoDados();
  }, []);

  const data = {
    columns: [
      {
        label: "Id",
        field: "ordemEncId",
      },
      {
        label: "Referencia",
        field: "Referencia",
      },
      {
        label: "Lote",
        field: "Lote",
      },
      {
        label: "Tipo Embalagem",
        field: "TipoEmbalagem",
      },
      {
        label: "Lote Embalagem",
        field: "LoteEmbalagem",
      },
      {
        label: "Tipo Tampa",
        field: "TipoTampa",
      },
      {
        label: "Lote Tampa",
        field: "LoteTampa",
      },
      {
        label: "Operador",
        field: "Operador",
      },
      {
        label: "Hora Início",
        field: "HoraInicio",
      },
      {
        label: "Hora Fim",
        field: "HoraFim",
      },
      {
        label: "Máquina Enchimento",
        field: "MaquinaEnchimento",
      },
    ],
    rows: dadosObtidos,
  };

  return <MDBDataTable striped data={data} />;
}

export default TableComponentSec3;
