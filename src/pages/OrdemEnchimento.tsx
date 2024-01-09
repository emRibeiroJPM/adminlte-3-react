/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {ContentHeader} from '@components';
import FormularioOrdemEnchimento from '@app/components/form-component/formOrdemEnchimento';
import TableComponentOrdemEnchimento from '@app/components/table/TableComponentOrdemEnchimento';

const OrdemEnchimento = () => {
  return (
    <div>
      <ContentHeader title="Ordem Enchimento" />
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Ordem Enchimento</h3>
              <div className="card-tools">
              </div>
            </div>
            <div className="card-body">
              <FormularioOrdemEnchimento/>
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
            <TableComponentOrdemEnchimento/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrdemEnchimento;
