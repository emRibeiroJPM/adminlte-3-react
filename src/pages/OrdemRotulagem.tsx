import {ContentHeader} from '@components';
import GaugeComponent from '@app/components/gauge/GaugeComponent';
import FormularioOrdemRotulagem from '@app/components/form-component/formOrdemRotulagem';
import TableComponentOrdemRotulagem from '@app/components/table/TableComponentOrdemRotulagem';

const OrdemRotulagem = () => {
  return (
    <div>
      <ContentHeader title="Ordem Rotulagem" />
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Ordem de Rotulagem</h3>
            </div>
            <div className="card-body">
                <div style={{flexDirection:"row",justifyContent:"center",}}>
                  <div style={{}}>
                    <FormularioOrdemRotulagem/>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Ordens de Rotulagem</h3>
            </div>
            <div className="card-body">
              <TableComponentOrdemRotulagem/>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Visores de Controlo Zona A</h3>
            </div>
            <div className="card-body">
              <div id='gaugeContainer' style={{display:"flex",maxWidth:"100%",flexWrap:"wrap",justifyContent:'space-evenly'}}>
                <GaugeComponent valorAtual={86} valorMaximo={120}/>
                <GaugeComponent valorAtual={35} valorMaximo={120}/>
                <GaugeComponent valorAtual={95} valorMaximo={120}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrdemRotulagem;


/*

*/
