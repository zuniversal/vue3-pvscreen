import { createStore } from 'vuex'
import moment from 'moment'// 
import * as services from '@/services/home';
import { nowYearMonthDayFull, toFixed } from '@/utils';
import { POWER_CURVE } from '@/views/Home/PowerLineChart';
import getters from './getters'// 

const CHANGE_STORE = 'changeStore'

export const defState = {
  name: 'zyb', 
  width: 200,
  realData: {},
  electricFeeParams: {
    sn: '00018469010327',
  },
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
  powerlineInfo: {},
  powerlineInfo: [],
  realDataStatistics: {
    ep: 0,
    ep: 0,
  },
  temperatureHumidityInfo: {},
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
  realStatus: {
    pv: {},
    ps: {},
    ld: {},
    gd: {},
    status: 11,
  },
  carbonAssets: {},
}

export default createStore({
  modules: {
  },  
  getters,
  state: defState,
  mutations: {
    [CHANGE_STORE](store, payload ) {
      console.log(' mutations changeStore, payload  ： ', store, payload , this, this.state.name, this.state.name === 'zyb', )
      const res = (this.state.name === 'zyb' ? 'bbb' : 'zyb')
      console.log(' res ： ', res,  )// 
      this.state.name = res
    },
    setWidth(state, width) {
      console.log(' setWidth ： ', state, width)
      state.width = width
    },
    setWidth(state, width) {
      console.log(' setWidth ： ', state, width)
      state.width = width
    },
    
    ['home/getRealData'](state, { payload, data }) {
      state.realData = {
        ...data,
        upTime: moment(data.uptime).format('YYYY-MM-DD HH:mm:ss'),
      };
    },
    ['home/getPowerlineInfo'](state, { payload, data }) {
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

      state.powerlineParams = payload
      state.powerlineInfo = data
    },
    ['home/getElectricFee'](state, { payload, data }) {
      const c1 = { itemsTyle: { normal: { color: 'rgba(236, 78, 81)' } } };
      const c2 = { itemsTyle: { normal: { color: 'rgba(231, 178, 69)' } } };
      const c3 = { itemsTyle: { normal: { color: 'rgba(19, 208, 208)' } } };
      const c4 = { itemsTyle: { normal: { color: '#a1ce63' } } };
      const epSum = toFixed(data.ep.valley + data.ep.usual + data.ep.peak)
      const feeSum = toFixed(data.fee.valley + data.fee.usual + data.fee.peak)
      const feeAvg = toFixed(feeSum / epSum)

      state.electricFeeParams = payload
      state.electricFee = {
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
    ['home/getRealDataStatistics'](state, { payload, data }) {
      state.realDataStatistics = data
    },
    ['home/getTemperatureHumidity'](state, { payload, data }) {
      state.temperatureHumidityInfo = data
    },
    ['home/getStatistics'](state, { payload, data }) {
      state.statistics = data
    },
    ['home/getPVStatistics'](state, { payload, data }) {
      state.powerInstallInfo = data
    },
    ['home/getEle7days'](state, { payload, data }) {
      const storagEnergy = []
      const cityEnergy = []
      const greenEnergy = []
      const xAxisData = []
      data.forEach((v, i) => {
        storagEnergy.push(v.ps)
        cityEnergy.push(v.se)
        greenEnergy.push(v.ge)
        xAxisData.push(v.date)
      })
      state.historyElecCalc = {
        storagEnergy,
        cityEnergy,
        greenEnergy,
        xAxisData,
      };
    },
    ['home/getGe30days'](state, { payload, data }) {
      const incomeData = []
      const xAxisData = []
      data.forEach((v, i) => {
        incomeData.push(v.fee)
        xAxisData.push(v.date)
      })
      const sum = toFixed(data.reduce((total, cuv) => total + cuv.fee, 0) * 0.9419)
      state.incomeTrendInfo = {
        incomeData,
        xAxisData,
        sum,
      };
    },
    ['home/getRealStatus'](state, { payload, data }) {
      let pvStatus = 0
      if (data.pv.pv2_current > 0) {
        pvStatus = 1
      } else if (data.pv.pv2_current < 0) {
        pvStatus = 2
      } else {
        pvStatus = 0
      }
      
      state.realStatus = {
        ...data,
        pvStatus: data.pv.pv2_current > 0 ,
        psStatus: data.ps.status,
        status: `${pvStatus}${data.ps.status}`,
      };
    },
    ['home/getCarbonAssets'](state, { payload, data }) {
      state.carbonAssets = data
    },
  },
  actions: {
    changeStoreAction(store, payload ) {
      console.log(' actions changeStore ： ', store, payload , this, )
      this.commit(CHANGE_STORE)
    },
    setWidth(context, width) {
      console.log(' setWidth ： ',  width)
      this.commit('user/setWidth', width)
    },
    async getRealDataAsync(store, payload ) {
      const res = await services.getRealData(payload);
      this.commit(
        'home/getRealData',
        {
          ...res,
          payload,
        }
      );
    },
    async getPowerlineInfoAsync(store, payload ) {
      const { powerlineParams } = store.state
      const params = {
        ...powerlineParams,
        ...payload,
      }
      const res = await services.getPowerlineInfo(params);
      this.commit(
        'home/getPowerlineInfo',
        {
          ...res,
          payload: params,
        }
      );
    },
    async getElectricFeeAsync(store, payload ) {
      const res = await services.getElectricFee(payload);
      this.commit(
        'home/getElectricFee',
        {
          ...res,
          payload,
        }
      );
    },
    async getRealDataStatisticsAsync(store, payload ) {
      const res = await services.getRealDataStatistics(payload);
      this.commit(
        'home/getRealDataStatistics',
        {
          ...res,
          payload,
        }
      );
    },
    async getTemperatureHumidityAsync(store, payload ) {
      const res = await services.getTemperatureHumidity(payload);
      this.commit(
        'home/getTemperatureHumidity',
        {
          ...res,
          payload,
        }
      );
    },
    async getStatisticsAsync(store, payload ) {
      const res = await services.getStatistics(payload);
      this.commit(
        'home/getStatistics',
        {
          ...res,
          payload,
        }
      );
    },
    async getPVStatisticsAsync(store, payload ) {
      const res = await services.getPVStatistics(payload);
      this.commit(
        'home/getPVStatistics',
        {
          ...res,
          payload,
        }
      );
    },
    async getEle7daysAsync(store, payload ) {
      const res = await services.getEle7days(payload);
      this.commit(
        'home/getEle7days',
        {
          ...res,
          payload,
        }
      );
    },
    async getGe30daysAsync(store, payload ) {
      const res = await services.getGe30days(payload);
      this.commit(
        'home/getGe30days',
        {
          ...res,
          payload,
        }
      );
    },
    async getRealStatusAsync(store, payload ) {
      const res = await services.getRealStatus(payload);
      this.commit(
        'home/getRealStatus',
        {
          ...res,
          payload,
        }
      );
    },
    async getCarbonAssetsAsync(store, payload ) {
      const res = await services.getCarbonAssets(payload);
      this.commit(
        'home/getCarbonAssets',
        {
          ...res,
          payload,
        }
      );
    },
  },
})