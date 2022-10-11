import './style.less';
import p00 from '@/static/img/home/center/00.png'
import p01 from '@/static/img/home/center/01.png'
import p02 from '@/static/img/home/center/02.png'
import p10 from '@/static/img/home/center/10.png'
import p11 from '@/static/img/home/center/11.png'
import p12 from '@/static/img/home/center/12.png'
import p20 from '@/static/img/home/center/20.png'
import p21 from '@/static/img/home/center/21.png'
import p22 from '@/static/img/home/center/22.png'
import battery from '@/static/img/home/center/battery.png'
import water from '@/static/img/home/center/water.png'

const configs1 = [
  {
    text: 'PV1电压',
    val: '127.3V',
    key: 'pv1_voltage',
    unit: 'V',
  },
  {
    text: 'PV1电流',
    val: '11.OA',
    key: 'pv1_current',
    unit: 'A',
  },
  {
    text: 'PV2电压',
    val: '125.4V',
    key: 'pv2_voltage',
    unit: 'V',
  },
  {
    text: 'PV2电流',
    val: '10.9A',
    key: 'pv2_current',
    unit: 'A',
  },
];

const configs2 = [
  {
    text: '负载功率',
    val: '227.0W',
    key: 'pe',
    unit: 'W',
  },
];

const configs3 = [
  {
    text: '电池电流',
    val: '-16.0A',
    key: 'current',
    unit: 'A',
  },
  {
    text: '电池电压',
    val: '52.5V',
    key: 'voltage',
    unit: 'V',
  },
];

const configs4 = [
  {
    text: '电网电流',
    val: '6.5A',
    key: 'current',
    unit: 'A',
  },
  {
    text: '电网电压',
    val: '232.6V',
    key: 'voltage',
    unit: 'V',
  },
];

const configs = [
  {
    infos: configs1,
    // src: require('@/static/img/home/center/pvBlue.png'),
    key: 'pv',
    class: 'pvBlue',
  },
  {
    infos: configs2,
    // src: require('@/static/img/home/center/house.png'),
    key: 'ld',
    class: 'house',
  },
  {
    infos: configs3,
    // src: require('@/static/img/home/center/batteryBlue.png'),
    key: 'ps',
    class: 'batteryBlue',
  },
  {
    infos: configs4,
    // src: require('@/static/img/home/center/tower.png'),
    key: 'gd',
    class: 'tower',
  },
];

const statusMap = {
  '00': p00,
  '01': p01,
  '02': p02,
  '10': p10,
  '11': p11,
  '12': p12,
  '20': p20,
  '21': p21,
  '22': p22,
}

const PowerInfo = props => {
  const isPositiveCls = props.realStatus.ps.current > 0 ? 'inner1R' : ''
  return (
    <div className="machineCircleWrapper ">
      {configs.map((item, index) => (
        <div className="powerInfoItem " key={index}>
          {/* <div className='powerInfoIconWrapper'>
        <img src={item.src} className="powerInfoIcon"/>
      </div> */}
          {item.infos.map((v, i) => (
            <div className="powerInfoRow" key={i}>
              <div className="text">{v.text}</div>
              {/* <div className="val">{v.val}</div> */}
              <div className='val'>{props.realStatus[item.key][v.key] || 0}{v.unit}</div>
            </div>
          ))}
        </div>
      ))}
      <div className="machineCircle ">
        <div className="innerWrapper">
          <div className={`inner inner1 ${isPositiveCls}`}></div>
          <div className="inner inner2"></div>
          <div className="inner inner3"></div>
          <div className="inner inner4"></div>
        </div>
        {/* <div className='circleRingWrapper2'>
      <div className='circleRingWrapper3'>
      <div className='circleRingWrapper'>
        <img src={require('@/static/img/home/center/circle1.png')} className="circleRing"/></div></div></div> */}

        {/* <img src={require('@/static/img/home/center/circle1.png')} className="circleRing"/></div> */}
        <div className="circleRingWrapper circleRingWrapper2">
          <img
            src={statusMap[props.realStatus.status]}
            className="circleRing2"
          />
        </div>
        {/* <div className="centerMachineIcon">
          开机
        </div>  */}
        {/* <div className='circleRingWrapper circleRingWrapper3'><img src={require('@/static/img/home/center/circle1.png')} className="circleRing"/></div> */}
        <div className="centerMachineIcon">
          <img
            src={battery}
            className="centerIcon"
          />
          开机
        </div>
        {/* <div className="iconName iconName1">光伏</div>
        <div className="iconName iconName2">负载</div>
        <div className="iconName iconName3">储能</div>
        <div className="iconName iconName4">电网</div> */}
      </div>
    </div>
  );
  return (
    <div className="machineCircle ">
      {configs.map((item, index) => (
        <div className="powerInfoItem " key={index}>
          {/* <div className='powerInfoIconWrapper'>
        <img src={item.src} className="powerInfoIcon"/>
      </div> */}
          {item.infos.map((v, i) => (
            <div className="powerInfoRow" key={i}>
              <div className="text">{v.text}</div>
              <div className="val">{v.val}</div>
            </div>
          ))}
        </div>
      ))}
      {/* <img src={require('@/static/img/home/center/circle.png')} className="circleRing"/> */}
      <div className="centerMachineIcon">
        <img
          src={water}
          className="centerIcon"
        />
        开机
      </div>
    </div>
  );
};

export default PowerInfo;
