import './style.less';

const configs1 = [
  {
    text: '累计有功电量kWh',
    val: '26097284.52',
  },
  {
    text: '累计无功电量kVarh',
    val: '8584633.07',
  },
]

const configs2 = [
  {
    text: '累计有功电量kWh',
    val: '26097284.52',
    key: 'ep',
  },
  {
    text: '累计无功电量kVarh',
    val: '8584633.07',
    key: 'eq',
  },
]

const RealData = props => {
  return <div className='rightBox realData '>
    {/* <div className='realDataItemWrapper '>
      {configs1.map(v => (<div className='realDataItem'>
        <div className='text'>{v.text}</div>
        <div className='val'>{v.val}</div>
      </div>))}
    </div> */}
    <div className='realDataItemWrapper'>
      <div className='realDataItem'>
        {configs1.map((v, i) => <div className='text' key={i} >{v.text}</div>)}
      </div>
      <div className='realDataItem'>
        {configs2.map((v, i) => <div className='val' key={i} >{props.realDataStatistics[v.key]}</div>)}
      </div>
    </div>

    <div className='lightBox' onClick={props.toggleShowRealData}>实时数据</div>
  </div>
};

export default RealData;
