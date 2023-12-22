import { QRCode } from 'antd';

interface infoQR{
  tipoEmbalagem :string,
  operador:string,
  referencia:string,
  quantidadePaletes:number,
  cliente:string | [string,string],
  data: string | [string, string] | any
  produtosPalete:string | number,
  lote:number
}

function CodigoQR(props : infoQR) {
  //const jsonParaString = JSON.stringify(props);
  const textoSanitizadoParaQR = `Tipo de embalagem-> ${props.tipoEmbalagem} |
Operador-> ${props.operador} |
Referência-> ${props.referencia} |
Qtd Paletes-> ${props.quantidadePaletes} |
Cliente-> ${props.cliente} |
Data Início-> ${props.data[0]} |
Data Fim-> ${props.data[1]} |
ProdutosPalete-> ${props.quantidadePaletes} |
Lote-> ${props.lote}`
  //console.log(jsonParaString)
  //console.log(textoSanitizadoParaQR)
  return (<QRCode value={textoSanitizadoParaQR} type='svg' bgColor="#fff" style={{ marginBottom: 16 }} />)
}
export default CodigoQR





