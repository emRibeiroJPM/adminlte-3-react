import {SmallBox} from '@app/components';
import React from 'react';
import {ContentHeader} from '@components';

interface DashboardStatus {
  estado : 'success' | 'warning' | 'danger';
}

const Dashboard = ({estado='success'} : DashboardStatus) => {
  return (
    <div>
      <ContentHeader title="Dashboard" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-6">
              <div className={`small-box bg-${estado}`}>
                <div className="inner">
                  <h3>
                    100<sup style={{fontSize: '20px'}}>%</sup>
                  </h3>

                  <p>Secção 1</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars" />
                </div>
                <a href="/" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className={`small-box bg-${estado}`}>
                <div className="inner">
                  <h3>
                    100<sup style={{fontSize: '20px'}}>%</sup>
                  </h3>

                  <p>Secção 2</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars" />
                </div>
                <a href="/" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className={`small-box bg-${estado}`}>
                <div className="inner">
                  <h3>
                    100<sup style={{fontSize: '20px'}}>%</sup>
                  </h3>

                  <p>Secção 3</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars" />
                </div>
                <a href="/" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className={`small-box bg-${estado}`}>
                <div className="inner">
                  <h3>
                    100<sup style={{fontSize: '20px'}}>%</sup>
                  </h3>

                  <p>Secção 4</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars" />
                </div>
                <a href="/" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
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
                <button
                  type="button"
                  className="btn btn-tool"
                  data-widget="collapse"
                  data-toggle="tooltip"
                  title="Collapse"
                >
                  <i className="fa fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-widget="remove"
                  data-toggle="tooltip"
                  title="Remove"
                >
                  <i className="fa fa-times" />
                </button>
              </div>
            </div>
            <div className="card-body">
              Start creating your amazing application!
            </div>
            <div className="card-footer">Footer</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
