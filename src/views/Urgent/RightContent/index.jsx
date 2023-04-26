// import React, { useState, useEffect } from 'react';
import { ref, onMounted, defineComponent } from 'vue';
import { useStore } from 'vuex'; //
import { defState } from '@/store/index';
import '@/static/css/index.less';
import { nowYearMonthDayFull, toFixed } from '@/utils';
import { POWER_CURVE, configs } from '@/views/Home/PowerLineChart';
import './style.less';
import usePlatform from '@/hooks/usePlatform';
import SystemTitle from '@/views/Home/SystemTitle';
import IncomeTrendChart from '@/views/Home/IncomeTrendChart';
import PowerLineChart from '@/views/Home/PowerLineChart';
import PowerInstallLiquid from '@/views/Home/PowerInstallLiquid';
import HistoryElecCalc from '@/views/Home/HistoryElecCalc';
import EnergyCalc from '@/views/Home/EnergyCalc';
import CarbonAssets from '@/views/Home/CarbonAssets';
import EnvInfo from '@/views/Home/EnvInfo';
import PowerInfo from '@/views/Home/PowerInfo';
import RealData from '@/views/Home/RealData';
import RealDataDesc from '@/views/Home/RealDataDesc';
import ElectricPie from '@/views/Home/ElectricPie';
import SearchForm from '../SearchForm/index.vue';
import AlarmSeamlessScroll from '../components/AlarmSeamlessScroll';
import { urgentStore } from '@/store/urgent';
import { storedEnergyConfig } from '../../Home/EnergyCalc';

const propsState = {
	mapInstance: {
		type: Object,
		default: {},
	},
	statistics: {
		type: Object,
		default: {
			today: {},
			this_month: {},
			battery: {},
		},
	},
	powerInstallInfo: {
		type: Object,
		default: {
			pv: {},
			ps: {},
		},
	},
	historyElecCalc: {
		type: Object,
		default: {
			storagEnergy: [],
			cityEnergy: [],
			greenEnergy: [],
			xAxisData: [],
		},
	},
	incomeTrendInfo: {
		type: Object,
		default: {
			incomeData: [],
			xAxisData: [],
			sum: 0,
		},
	},
	incomeTrendInfo: {
		incomeData: [],
		xAxisData: [],
		sum: 0,
	},
};

const isShowRealData = ref(false);
const isShowCom = ref(true);
const RightContent = defineComponent({
	props: propsState,
	setup(props2, ctx) {
		const urgentStores = urgentStore();
		const props = urgentStores;
		const ajax = () => {
			const req = (props) => {
				urgentStores.getCarbonAssetsAsync();
				urgentStores.getRealDataStatisticsAsync();
				urgentStores.getElectricFeeAsync();
				urgentStores.getPowerlineInfoAsync();
			};
			setInterval(() => {
				req(props);
			}, 10000);
			req(props);
		};
		const getPowerlineInfoAsync = (params) => {
			urgentStores.getPowerlineInfoAsync(params);
		};
		const toggleShowRealData = () => {
			console.log(' toggleShowRealData ： ', isShowRealData.value);
			isShowRealData.value = !isShowRealData.value;
		};

		onMounted(() => {
			ajax();
			isShowCom.value = false;
			setTimeout(() => {
				isShowCom.value = true;
			}, 1000);
		});

		return () => (
			<div className={`rightContent `}>
				<RealData
					realDataStatistics={props.realDataStatistics}
					toggleShowRealData={toggleShowRealData}
				></RealData>
				{isShowRealData.value ? (
					<RealDataDesc realData={props.realData}></RealDataDesc>
				) : (
					<div className='righBlock'>
						<ElectricPie electricFee={props.electricFee}></ElectricPie>
						<PowerLineChart
							powerlineInfo={props.powerlineInfo}
							powerlineParams={props.powerlineParams}
							getPowerlineInfoAsync={getPowerlineInfoAsync}
						></PowerLineChart>
						<AlarmSeamlessScroll></AlarmSeamlessScroll>
					</div>
				)}
			</div>
		);
	},
});

export default RightContent;
