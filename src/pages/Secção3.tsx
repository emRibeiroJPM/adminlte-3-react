/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {ContentHeader} from '@components';
import FormularioSeccaoTres from '@app/components/form-component/formSeccao3';
import TableComponentSec3 from '@app/components/table/TableComponentSec3';

const Secção3 = () => {
  return (
    <div>
      <ContentHeader title="Terceira Secção da Fábrica" />
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Ordem Enchimento</h3>
              <div className="card-tools">
              </div>
            </div>
            <div className="card-body">
              <FormularioSeccaoTres/>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Ordens de Enchimento</h3>
              <div className="card-tools">
              </div>
            </div>
            <div className="card-body">
            <TableComponentSec3/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Secção3;
