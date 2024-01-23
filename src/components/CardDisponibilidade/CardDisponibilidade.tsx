import { Card, Flex, Metric, Text, ProgressCircle } from "@tremor/react";
import { useEffect, useState } from "react";

interface corProps {
  cor: "red" | "blue" | "yellow" | "gray";
}

interface props {
  availability?:number 
}

function CardDisponibilidade({availability=15}:props) {
  const [cor, setCor] = useState<corProps["cor"]>("gray");
  const [percentagem, setPercentagem] = useState(availability);

  useEffect(() => {
    setPercentagem(availability);
    
    if (percentagem >= 51 && percentagem <= 100) {
      setCor("blue");
    }
    
    if (percentagem >= 21 && percentagem <= 50) {
      setCor("yellow");
    }
    
    if (percentagem >= 0 && percentagem <= 20) {
      setCor("red");
    }
  }, [availability]);
  return (
    <Card className="max-w-sm mx-auto shadow-2xl bg-white rounded-lg">
      <Flex className="space-x-5 flex-wrap" justifyContent="center">
        <ProgressCircle
          showAnimation={true}
          color={cor}
          value={percentagem}
          size="lg"
          strokeWidth={1}
        >
          <span className="text-l text-gray-700 font-medium">
            {percentagem}%
          </span>
        </ProgressCircle>
        <div>
          <Text className="font-medium text-gray-700">373 / 480 minutos</Text>
          <Metric>Availability</Metric>
        </div>
      </Flex>
    </Card>
  );
}

export default CardDisponibilidade;
