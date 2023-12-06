import {SmallBox} from '@app/components';
import React from 'react';
import {ContentHeader} from '@components';
import LineChart from '@app/components/line-chart/LineChart';

interface DashboardStatus {
  estado? : 'success' | 'warning' | 'danger';
}

const Dashboard = ({estado='success'} : DashboardStatus) => {
  return (
    <div>
      <ContentHeader title="Dashboard" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-6">
              <SmallBox type='success' count={100} title='Secção 1' navigateTo='/primeira-seccao' />
            </div>
            <div className="col-lg-3 col-6">
              <SmallBox type='success' count={100} title='Secção 2' navigateTo='/segunda-seccao'/>
            </div>
            <div className="col-lg-3 col-6">
              <SmallBox type='success' count={100} title='Secção 3' navigateTo='/terceira-seccao' />
            </div>
            <div className="col-lg-3 col-6">
              <SmallBox type='success' count={100} title='Secção 4' navigateTo='/blank' />
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <  div className="card-header">
              <h3 className="card-title">Status Gerais da Primeira Secção</h3>
              <div className="card-tools">
              </div>
            </div>
            <div className="card-body">
              <LineChart/>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <  div className="card-header">
              <h3 className="card-title">Status Gerais da Primeira Secção</h3>
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

export default Dashboard;
