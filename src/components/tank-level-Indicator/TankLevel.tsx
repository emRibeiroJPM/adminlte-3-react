import {Liquid} from '@ant-design/plots'

interface tankProps {
    percent: number,
    shape?: 'rect',
    outline: { 
        border:number,
        distance:number,
    },
    wave?: {
        length:128
    },
}

function TankLevel() {

    const userConfig:tankProps = {
        percent: 0.8,
        shape: 'rect',
        outline: { 
            border:2,
            distance:4,
        },
        wave: {
            length:128
        },
    }

  return <Liquid percent={userConfig.percent} shape={'rect'} outline={userConfig.outline} wave={userConfig.wave}/>
}

export default TankLevel