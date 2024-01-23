import { AreaChart,} from "@tremor/react";
import { useState, useEffect} from "react";

interface dadosOEE {
  dados: number[]
}

const OEE = ({dados}:dadosOEE) => {
/*
  const [array, setArray] = useState(
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
      setArray((prevArray) => {
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
  }, []); // Empty dependency array means this effect runs once after the initial render
*/
  return (
        <AreaChart
          className="h-72 mt-4 ease-in"
          showGridLines={false}
          data={dados}
          index="timestamp"
          showYAxis={true}
          maxValue={200}
          showAnimation={false}
          curveType={"natural"}
          yAxisWidth={65}
          categories={["runTime","actualSpeed","actualGoodProduct"]}
          colors={["cyan","lime","purple"]}
          onValueChange={function noRefCheck() {}}
        />
  );
};

export default OEE;