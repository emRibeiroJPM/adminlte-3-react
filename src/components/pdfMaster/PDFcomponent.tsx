/*
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;900&display=swap" rel="stylesheet"></link>
Font.register({ family: 'Roboto', src:'https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;900&display=swap'});
*/
import { Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import { PDFDownloadLink, Document, Page, Image } from "@react-pdf/renderer";
import CodigoQR from "../codigoQR/qrCode-component";
import { Button } from "antd";
import html2canvas from "html2canvas";
//TRANSFORMAR CODIGO QR EM SVG PARA COLOCAR NON DOCUMENTO PDF
//https://dev.to/saranshk/how-to-convert-a-react-component-to-an-image-2jon

interface infoPDF {
  tipoEmbalagem: string;
  operador: string;
  referencia: string;
  quantidadePaletes: number;
  cliente: [string, string] | string;
  data: [string, string] | string | any;
  produtosPalete: number | string;
  lote: number;
}

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    margin: "10px",
  },
  Cabecalho: {
    maxHeight: "75%",
    maxWidth: "75%",
    transformOriginX: "-50%",
    justifyContent: "space-around",
  },
  dadosFormulario: {
    fontFamily: "Courier",
    marginBottom: "25px",
    marginLeft: "25px",
  },
  rodape: {
    display: "flex",
    flexDirection: "column",
  },
  link: {
    fontFamily: "Courier",
    textDecoration: "underline",
    marginLeft: "25px",
    alignItems: "flex-end",
  },
});

const handleConversaoQRImagem = async (element: any, imageFileName: any) => {
  const canvas = await html2canvas(element);
  const image = canvas.toDataURL("image/png", 1.0);
  console.log(image);
  return image;
};

const pdfDocument = (texto: infoPDF) => {
  //console.log("dentro do pdf este e o texto not string",texto)
  //handleConversaoQRImagem()
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View fixed>
          <Image source={"./img/egiquimica.png"} style={styles.Cabecalho} />
        </View>
        <View style={styles.dadosFormulario}>
          <Text>{`Tipo de embalagem: ${texto.tipoEmbalagem}`}</Text>
          <Text>{`Operador: ${texto.operador}`}</Text>
          <Text>{`Referência: ${texto.referencia}`}</Text>
          <Text>
            {`Quantidade de Paletes: ${texto.quantidadePaletes}`} paletes
          </Text>
          <Text>{`Cliente: ${texto.cliente[0]} ${texto.cliente[1]}`}</Text>
          <Text>{`Data Início: ${texto.data[0]}`}</Text>
          <Text>{`Data Fim: ${texto.data[1]}`}</Text>
          <Text>{`Qtd Produtos por palete: ${texto.produtosPalete}`}</Text>
          <Text>{`Lote: ${texto.lote}`}</Text>
        </View>
        <View style={styles.rodape}>
          <Text>
            <Link style={styles.link} src="https://www.egiquimica.com/">
              Visite a nossa pagina
            </Link>
          </Text>
        </View>
      </Page>
    </Document>
  );
};

function PDFcomponent(props: infoPDF) {
  const options: any = {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const dataAtual = new Date().toLocaleDateString("pt-PT", options);

  return (
    <div>
      <div id="idCodigoQR">
        <CodigoQR {...props} />
      </div>
      <div>
        <Button type="primary">
          <PDFDownloadLink
            document={pdfDocument(props)}
            fileName={`Form-${dataAtual}.pdf`}
          >
            {({ blob, url, loading, error }) =>
              loading ? "A carregar..." : "Transferir PDF"
            }
          </PDFDownloadLink>
        </Button>
      </div>
    </div>
  );
}

export default PDFcomponent;

/*
const handleDownloadImage = () => {
    const element = document.getElementById('print'),
    canvas = await html2canvas(element),
    data = canvas.toDataURL('image/jpg'),
    link = document.createElement('a');

    link.href = data;
    link.download = 'downloaded-image.jpg';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
*/
