import {SmallBox} from '@app/components';
import {ContentHeader} from '@components';
import LineChart from '@app/components/line-chart/LineChart';
import TableComponent from '@app/components/table/TableComponent';
import CardDisponibilidade from '@app/components/CardDisponibilidade/CardDisponibilidade';
import CardPerformance from '@app/components/CardPerformance/CardPerformance';
import CardQualidade from '@app/components/CardQualidade/CardQualidade';
import LineChartOEE from '@app/components/line-chart/LineChartOEE';
import ArraySwapper from '@app/components/line-chart/OEEchart';

const Dashboard = () => {
  return (
    <div>
      <ContentHeader title="Dashboard" />
      <section className="content">
        <div className="container-fluid mb-5">
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
            <div className="col-lg-3 col-6">
              <CardDisponibilidade/>
            </div>
            <div className="col-lg-3 col-6">
              <CardPerformance/>
            </div>
            <div className="col-lg-3 col-6">
              <CardQualidade/>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <  div className="card-header">
              <h3 className="card-title">Overall Equipment Effectiveness</h3>
              <div className="card-tools">
              </div>
            </div>
            <div className="card-body">
              <ArraySwapper/>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <  div className="card-header">
              <h3 className="card-title">Status Gerais</h3>
              <div className="card-tools">
              </div>
            </div>
            <div className="card-body">
              <TableComponent/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
