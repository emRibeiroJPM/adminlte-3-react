import { Card, Flex, Metric, Text, ProgressCircle } from "@tremor/react";
import { useState, useEffect } from "react";
interface corProps {
  cor: "red" | "blue" | "yellow" | "gray";
}

interface props {
  performance?:number 
}

function CardPerformance({performance=30}:props) {
  const [cor, setCor] = useState<corProps["cor"]>("gray");
  const [percentagem, setPercentagem] = useState(performance);

  useEffect(() => {
    setPercentagem(performance);
    
    if (percentagem >= 51 && percentagem <= 100) {
      setCor("blue");
    }
    
    if (percentagem >= 21 && percentagem <= 50) {
      setCor("yellow");
    }
    
    if (percentagem >= 0 && percentagem <= 20) {
      setCor("red");
    }
  }, [performance]);

  return (
    <Card className="max-w-sm mx-auto shadow-2xl bg-white rounded-lg">
      <Flex className="space-x-5 flex-wrap" justifyContent="center">
        <ProgressCircle
          value={percentagem}
          color={cor}
          size="lg"
          strokeWidth={1}
        >
          <span className="text-l text-gray-700 font-medium">
            {percentagem}%
          </span>
        </ProgressCircle>
        <div>
          <Text className="font-medium text-gray-700">
            {" "}
            19,271 / 22,380 peças produzidas
          </Text>
          <Metric>Performance</Metric>
        </div>
      </Flex>
    </Card>
  );
}

export default CardPerformance;
