import { Card, Flex, Metric, Text, ProgressCircle } from "@tremor/react";
import { useState, useEffect } from "react";
interface corProps {
  cor: "red" | "blue" | "yellow" | "gray";
}
function CardPerformance() {
  const [cor, setCor] = useState<corProps["cor"]>("gray");
  const [percentagem, setPercentagem] = useState(30);

  useEffect(() => {
    if (percentagem <= 100) {
      setCor("blue");
      if (percentagem <= 50) {
        setCor("yellow");
        if (percentagem <= 20) {
          setCor("red");
        }
      }
    }
  }, []);

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
