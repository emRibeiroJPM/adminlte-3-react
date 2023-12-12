import { Button, QRCode } from 'antd';

const downloadQRCode = () => {
  const canvas = document.getElementById('myqrcode')?.querySelector<HTMLCanvasElement>('canvas');
  if (canvas) {
    const url = canvas.toDataURL();
    const a = document.createElement('a');
    a.download = 'QRCode.png';
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};

interface Encomenda {
  tipoEmbalagem : string | undefined,
  operador: string | undefined,
  referencia: string | undefined,
  quantidadePaletes: string | undefined,
  cliente: string | undefined,
  data: string | undefined,
  produtosPalete: string | undefined,
  lote: string | undefined

}

function CodigoQR({informacaoAInserir}) {
  const jsonParaString = JSON.stringify(informacaoAInserir);
  return (
    <div id="myqrcode">
        <QRCode value={jsonParaString} bgColor="#fff" style={{ marginBottom: 16 }} />
        <Button type="primary" onClick={downloadQRCode}>
        Download
        </Button>
    </div>)
}

export default CodigoQR





