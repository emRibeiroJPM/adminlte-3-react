import {SmallBox} from '@app/components';
import {ContentHeader} from '@components';
import LineChart from '@app/components/line-chart/LineChart';
import TableComponent from '@app/components/table/TableComponent';


const Dashboard = () => {
  return (
    <div>
      <ContentHeader title="Dashboard" />
      <section className="content">
        <div className="container-fluid">
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
            <div className="col-lg-3 col-6">
              <SmallBox type='success' count={40} title='Secção 1' navigateTo='/primeira-seccao' />
            </div>
            <div className="col-lg-3 col-6">
              <SmallBox type='success' count={100} title='Secção 2' navigateTo='/segunda-seccao'/>
            </div>
            <div className="col-lg-3 col-6">
              <SmallBox type='success' count={60} title='Secção 3' navigateTo='/terceira-seccao' />
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
              <LineChart/>
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
