import './style.less';

const configs1 = [
  {
    text: '烟感',
    val: '正常',
    src: require('@/static/img/home/center/smoke.png')
  },
  {
    text: '水浸',
    val: '正常',
    src: require('@/static/img/home/center/water.png')
  },
]

const configs2 = [
  {
    text: '环境温度°C ',
    val: '18',
    key: 'temperature',
    src: require('@/static/img/home/center/temperature.png')
  },
  {
    text: '环境湿度%',
    val: '72',
    key: 'humidity',
    src: require('@/static/img/home/center/humidity.png')
  },
]

const EnvInfo = props => {
  const {temperatureHumidityInfo, } = props
  // useEffect(() => {
  //   // props.dispatch({
  //   //   type: 'home/getTemperatureHumidityAsync',
  //   // })
  //   props.getTemperatureHumidityAsync();
  // }, []);

  return <div className='envInfo '>
    <div className='leftBox '>
      {configs1.map((v, i) => (<div className='envInfoItem' key={i}>
        <div className='envInfoIconWrapper'>
          <img src={v.src} className="envInfoIcon"/>
        </div>
        <div className='text'>{v.text}</div>
        <div className='val'>{v.val}</div>
        {/* <div className='val'>{temperatureHumidityInfo[v.key]}</div> */}
      </div>))}
    </div>
    <div className='rightBox '>
      {configs2.map((v, i) => (<div className='envInfoItem' key={i}>
        <div className='envInfoIconWrapper'>
          <img src={v.src} className="envInfoIcon"/>
        </div>
        <div className='text'>{v.text}</div>
        {/* <div className='val'>{v.val}</div> */}
        <div className='val'>{temperatureHumidityInfo[v.key]}</div>
      </div>))}
    </div>
  </div>
};

export default EnvInfo;
// export default connect(mapStateToProps, mapDispatchToProps)(EnvInfo);

