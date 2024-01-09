/* eslint-disable jsx-a11y/anchor-is-valid */
import {ContentHeader} from '@components';
import FormularioAmostrasQA from '@app/components/form-component/formAmostrasQA';
import TableComponentAmostrasControloQualidade from '@app/components/table/TableComponentAmostrasControloQualidade';

const AmostrasControloQualidade = () => {
  return (
    <div>
      <ContentHeader title="Controlo de Qualidade" />
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Amostra Controlo de Qualidade</h3>
              <div className="card-tools">
              </div>
            </div>
            <div className="card-body">
              <FormularioAmostrasQA/>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Historial Amostras</h3>
              <div className="card-tools">
              </div>
            </div>
            <div className="card-body">
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmostrasControloQualidade;
