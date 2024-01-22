"use client";
import { AreaChart} from "@tremor/react";
import { useState,useEffect } from "react";

const valueFormatter = function (number:any) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

const LineChartOEE = () =>{
    const [data,setData] = useState<any>();
    const recebeDados =  async() =>{
      const resposta = await fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json');
      const json = await resposta.json();
      await setData(json);
      return json;
    }
    useEffect(()=>{
      recebeDados();
    },[])
    return (
        <>
          <AreaChart
            className="h-72 mt-4"
            curveType="natural"
            showAnimation={true}
            data={data}
            index="Date"
            yAxisWidth={65}
            categories={["scales"]}
            colors={["cyan"]}
            valueFormatter={valueFormatter}
          />
        </>
      );
}

export default LineChartOEE;