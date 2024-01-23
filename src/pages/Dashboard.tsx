import { useState,useEffect } from 'react';
import {ContentHeader} from '@components';
import TableComponent from '@app/components/table/TableComponent';
import CardDisponibilidade from '@app/components/CardDisponibilidade/CardDisponibilidade';
import CardPerformance from '@app/components/CardPerformance/CardPerformance';
import CardQualidade from '@app/components/CardQualidade/CardQualidade';
import OEE from '@app/components/line-chart/OEEchart';
import { ArrayAttribute } from '@antv/g2/lib/api/types';

/*
{
  machineId: '9774acb6-c882-451b-91a4-6043c60691e6',
  timestamp: '1706025863951',
  runTime: '27',
  actualSpeed: '18',
  actualGoodProduct: '8'
}
  */
interface arrayProps  {
  machineId: 'string',
  timestamp: 'string'| number,
  runTime: 'string'| number,
  actualSpeed: 'string' | number,
  actualGoodProduct: 'string' | number
}

const Dashboard = () => {
  
  const [array, setArray] = useState<arrayProps | number[] | any>(
    Array.from({ length: 20 }, (_, index) => index + 1)
  );

  
  useEffect(() => {
    // Create an EventSource for the SSE stream
    const eventSource = new EventSource(
      "http://localhost:7070/api/v1/eventoTemporizado/receber"
    );

    // Listen for messages from the SSE stream
    eventSource.addEventListener("message", (event) => {
      const eventData = JSON.parse(event.data);
        console.log(eventData);
      setArray((prevArray:any) => {
        // Create a new array by shifting elements one position to the right
        const newArray = [...prevArray];
        const lastElement = newArray.pop(); // Remove the last element
        newArray.unshift(eventData); // Add the new data object to the beginning
        return newArray;
      });
    });
    // Clean up the EventSource when the component is unmounted
    return () => {
      eventSource.close();
    };
  }, []); 

  return (
    <div>
      <ContentHeader title="Dashboard" />
      <section className="content">
        <div className="container-fluid mb-5">
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
            <div className="col-lg-3 col-6">
              <CardDisponibilidade availability={array.runTime} />
            </div>
            <div className="col-lg-3 col-6">
              <CardPerformance performance={array.actualSpeed}/>
            </div>
            <div className="col-lg-3 col-6">
              <CardQualidade quality={array.actualGoodProduct}/>
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
              <OEE dados={array}/>
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
