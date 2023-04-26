import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';
import { createIndexArr } from '@/utils';
import icon from '@/static/img/home/left/historyElecCalc.png';
import './style.less';

const AlarmSeamlessScroll = (props) => {
	return (
		<div className='leftBox alarmSeamlessScroll'>
			<div className='iconTitle'>
				<div className='df'>
					<img src={icon} className='icon' />
					<div className='chartTitle'>监控告警</div>
				</div>
			</div>
			{/* <Vue3SeamlessScroll
				delay='0'
				singleWaitTime='0'
				list={createIndexArr(20)}
				direction={'up'}
			> */}
			<div class='alarmSeamlessScrollContainer'>
				{createIndexArr(8).map((v, i) => (
					<div key={i} className={` `}>
						{v}
					</div>
				))}
			</div>
			{/* </Vue3SeamlessScroll> */}
		</div>
	);
};

export default AlarmSeamlessScroll;
