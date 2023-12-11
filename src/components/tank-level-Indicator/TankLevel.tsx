import {Liquid} from '@ant-design/plots'

interface TankProp {
  percent : number
}

function TankLevel({percent}:TankProp) {

    const config = {
        percent: percent,
        style: {
          outlineBorder: 4,
          outlineDistance: 8,
          waveLength: 400,
        },
      };
      return <Liquid percent={config.percent} style={{outlineBorder: config.style.outlineBorder, outlineDistance: config.style.outlineDistance,waveLength:config.style.waveLength}} />;
    };

    export default TankLevel;