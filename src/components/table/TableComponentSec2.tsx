import Table from "react-bootstrap/Table";
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

function TableComponentSec2() {
  const [dadosObtidos, setDadosObtidos] = useState<TipoDeDados[]>([]);

  const obtencaoDados = () => {
    //dados do tipo Date,scale
    fetch("http://localhost:3000/ordensRotulagem")
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
        label: "formId",
        field: "formId",
      },
      {
        label: "TipoEmbalagem",
        field: "TipoEmbalagem",
      },
      {
        label: "Operador",
        field: "Operador",
      },
      {
        label: "Referencia",
        field: "Referencia",
      },
      {
        label: "QtdPaletes",
        field: "QtdPaletes",
      },
      {
        label: "Cliente",
        field: "Cliente",
      },
      {
        label: "DataInicio",
        field: "DataInicio",
      },
      {
        label: "DataFim",
        field: "DataFim",
      },
      {
        label: "QtdProdutosPalete",
        field: "QtdProdutosPalete",
      },
      {
        label: "Lote",
        field: "Lote",
      },
    ],
    rows: dadosObtidos,
  };

  return <MDBDataTable striped data={data} />;
}

export default TableComponentSec2;
