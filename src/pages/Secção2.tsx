import {ContentHeader} from '@components';
import GaugeComponent from '@app/components/gauge/GaugeComponent';
import FormularioSeccaoDois from '@app/components/form-component/formSeccao2';

const Secção2 = () => {
  return (
    <div>
      <ContentHeader title="Segunda Secção da Fábrica" />
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Ordem de Rotulagem</h3>
            </div>
            <div className="card-body">
                <div style={{flexDirection:"row",justifyContent:"center",}}>
                  <div style={{}}>
                    <FormularioSeccaoDois/>
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
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Visores de Controlo Zona B</h3>
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

export default Secção2;


/*

*/
