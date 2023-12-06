/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {ContentHeader} from '@components';
import TankLevel from '@app/components/tank-level-Indicator/TankLevel';

const Secção1 = () => {
  return (
    <div>
      <ContentHeader title="Primeira Secção da Fábrica" />
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <  div className="card-header">
              <h3 className="card-title">Status Gerais da Primeira Secção</h3>
            </div>
            <div className="card-body">
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Secção1;
