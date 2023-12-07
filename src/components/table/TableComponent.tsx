import Table from 'react-bootstrap/Table'

import { useEffect, useState } from 'react';

interface TipoDeDados {
    Date: string,
    scales: number
}

function TableComponent() {

    const [data, setData] = useState<TipoDeDados[]>([]);

    const obtencaoDados = () =>{
        //dados do tipo Date,scale
        fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
            .then((response)=>response.json())
            .then((json) => setData(json))
            .catch((error)=>{
                console.log('falha na obtençao de dados',error);
            });
        }
        useEffect(()=>{
            obtencaoDados();
        },[]);
      
    return(<Table>
            <thead>
                <tr>
                    <th>{null}</th>
                    <th>Date</th>
                    <th>scales</th>
                    <th>Alert</th>
                </tr>
            </thead>
            <tbody>
                {data.map((valor,index)=>{
                return(
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{valor.Date}</td>
                        <td>{valor.scales}</td>
                        {}
                        <td>Criar função para alerta</td>
                    </tr>)})}           
            </tbody>
        </Table>)       
};

export default TableComponent

