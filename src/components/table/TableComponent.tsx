import Table from 'react-bootstrap/Table'
import { MDBDataTable} from 'mdbreact'

import { useEffect, useState } from 'react';


interface TipoDeDados {

    Date: string,
    scales: number

}

function TableComponent() {

    const [dadosObtidos, setDadosObtidos] = useState<TipoDeDados[]>([]);

    const obtencaoDados = () =>{
        //dados do tipo Date,scale
        fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
            .then((response)=>response.json())
            .then((json) => setDadosObtidos(json))
            .catch((error)=>{
                console.log('falha na obtençao de dados',error);
            });
        }
        useEffect(()=>{
            obtencaoDados();
        },[]);

        const data = {
            columns:[
                {
                    label:'Date',
                    field:'Date',
                },
                {
                    label: 'Scales',
                    field: 'scales',
                }
            ],
            rows:dadosObtidos

        }
      
    return(<MDBDataTable
        striped
        data={data}/>)       
};

export default TableComponent
