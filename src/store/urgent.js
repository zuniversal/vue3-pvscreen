import { defineStore } from 'pinia'; //
import * as services from '@/services/home';
import * as dataJson from './data.json';
import { nowYearMonthDayFull, toFixed } from '@/utils';
import { POWER_CURVE } from '@/views/Home/PowerLineChart';

const dataList = [
	{
		position: [121.737959, 31.15069],
		title: '庄宇彬家',
		type: 'customer',
	},
	{
		position: [120.737959, 30.15069],
		title: '庄宇彬家',
		type: 'customer',
	},
	{
		position: [121.71, 31.15069],
		title: '庄宇彬家',
		type: 'customer',
	},
	{
		position: [121.75, 31.15069],
		title: '庄宇彬家',
		type: 'customer',
	},
	{
		position: [121.78, 31.15069],
		title: '庄宇彬家',
		type: 'customer',
	},
	{
		position: [121.79, 31.15069],
		title: '庄宇彬家',
		type: 'customer',
	},
];

const defState = {
	mapInstance: {},
	mapObj: {},
	dataList: [],
	dataList: dataJson.default.data.list.map((v) => ({
		position: [v[3], v[4]],
		title: v[1],
		type: 'customer',
	})),
	// dataList: dataList,
	dataList2: dataList,
	statistics: {
		today: {},
		this_month: {},
		battery: {},
	},
	powerInstallInfo: {
		pv: {},
		ps: {},
	},
	historyElecCalc: {
		storagEnergy: [],
		cityEnergy: [],
		greenEnergy: [],
		xAxisData: [],
	},
	incomeTrendInfo: {
		incomeData: [],
		xAxisData: [],
		sum: 0,
	},
	carbonAssets: {},
	realDataStatistics: {
		ep: 0,
		ep: 0,
	},
	realData: {},
	electricFee: {
		ep: [],
		fee: [],
		epSum: 0,
		feeSum: 0,
		feeAvg: 0,
	},
	powerlineParams: {
		start_time: `${nowYearMonthDayFull} 00:00:00`,
		end_time: `${nowYearMonthDayFull} 23:59:59`,
		query: POWER_CURVE,
	},
	powerlineInfo: [],
};

export const urgentStore = defineStore('urgent', {
	state: () => defState,
	actions: {
		saveNames(name) {
			console.log(' saveNames ： ', this, this.name); //
			this.name = name;
		},
		setMapInstance(mapInstance) {
			console.log(' setMapInstance ： ', this.mapInstance, mapInstance); //
			this.mapInstance = mapInstance;
		},
		setMapObj(mapObj) {
			console.log(' setmapObj ： ', this.mapObj, mapObj); //
			this.mapObj = mapObj;
		},
		async getDataListAsync(payload) {
			const data = await fetch(`/data.json`).then((res) => res.json());
			console.log('  getDataListAsync data await 结果  ：', data); //
			// const dataList = data.data.list.map((v) => ({
			//   position: [v[3], v[4]],
			//   title: v[1],
			//   type: 'customer',
			// }))
			this.dataList = dataList;
			console.log('  this.dataList  ：', dataJson, dataList, this.dataList); //
		},
		async getStatisticsAsync(payload) {
			const { data } = await services.getStatistics(payload);
			this.statistics = data;
		},
		async getPVStatisticsAsync(payload) {
			const { data } = await services.getPVStatistics(payload);
			this.powerInstallInfo = data;
		},
		async getEle7daysAsync(payload) {
			const { data } = await services.getEle7days(payload);
			const storagEnergy = [];
			const cityEnergy = [];
			const greenEnergy = [];
			const xAxisData = [];
			data.forEach((v, i) => {
				storagEnergy.push(v.ps);
				cityEnergy.push(v.se);
				greenEnergy.push(v.ge);
				xAxisData.push(v.date);
			});
			this.historyElecCalc = {
				storagEnergy,
				cityEnergy,
				greenEnergy,
				xAxisData,
			};
		},
		async getGe30daysAsync(payload) {
			const { data } = await services.getGe30days(payload);
			const incomeData = [];
			const xAxisData = [];
			data.forEach((v, i) => {
				incomeData.push(v.fee);
				xAxisData.push(v.date);
			});
			const sum = toFixed(
				data.reduce((total, cuv) => total + cuv.fee, 0) * 0.9419
			);
			this.incomeTrendInfo = {
				incomeData,
				xAxisData,
				sum,
			};
		},
		async getCarbonAssetsAsync(payload) {
			const { data } = await services.getCarbonAssets(payload);
			this.carbonAssets = data;
		},
		async getRealDataAsync(payload) {
			const { data } = await services.getRealData(payload);
			this.realData = {
				...data,
				upTime: moment(data.uptime).format('YYYY-MM-DD HH:mm:ss'),
			};
		},
		async getRealDataStatisticsAsync(payload) {
			const { data } = await services.getRealDataStatistics(payload);
			this.realDataStatistics = data;
		},
		async getElectricFeeAsync(payload) {
			const { data } = await services.getElectricFee(payload);
			const c1 = { itemsTyle: { normal: { color: 'rgba(236, 78, 81)' } } };
			const c2 = { itemsTyle: { normal: { color: 'rgba(231, 178, 69)' } } };
			const c3 = { itemsTyle: { normal: { color: 'rgba(19, 208, 208)' } } };
			const c4 = { itemsTyle: { normal: { color: '#a1ce63' } } };
			const epSum = toFixed(data.ep.valley + data.ep.usual + data.ep.peak);
			const feeSum = toFixed(data.fee.valley + data.fee.usual + data.fee.peak);
			const feeAvg = toFixed(feeSum / epSum);

			this.electricFeeParams = payload;
			this.electricFee = {
				ep: [
					{ value: data.ep.valley, name: '谷时电量', ...c1 },
					{ value: data.ep.usual, name: '平时电量', ...c2 },
					{ value: data.ep.peak, name: '峰时电量', ...c3 },
					{ value: data.ep.tip, name: '尖时电量', ...c4 },
				],
				fee: [
					{ value: data.fee.valley, name: '谷时电费', ...c1 },
					{ value: data.fee.usual, name: '平时电费', ...c2 },
					{ value: data.fee.peak, name: '峰时电费', ...c3 },
					{ value: data.fee.tip, name: '尖时电费', ...c4 },
				],
				epSum,
				feeSum,
				feeAvg,
			};
		},
		async getPowerlineInfoAsync(payload) {
			const powerlineParams = this.powerlineParams;
			const params = {
				...powerlineParams,
				...payload,
			};
			const { data } = await services.getPowerlineInfo(params);
			// const powerlineInfo = {}
			// if (payload.query === powerConfigMap.POWER_CURVEif) {
			//   // powerlineInfo = data
			// }
			// if (payload.query === powerConfigMap.POWER_VOLTAGEif) {
			//   // powerlineInfo = data
			// }
			// if (payload.query === powerConfigMap.POWER_CURRENTif) {
			//   // powerlineInfo = data
			// }
			// if (payload.query === powerConfigMap.POWER_LOADif) {
			//   // powerlineInfo = data
			// }

			this.powerlineParams = params;
			this.powerlineInfo = data;
		},
	},
	// async getProvinceAsync(payload) {
	// 	const { data } = await services.getProvinceListAsync(payload);
	// 	this.provinceList = data;
	// },
});
