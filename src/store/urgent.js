import { defineStore,  } from 'pinia'// 
import * as services from '@/services/home';
import { toFixed } from '@/utils';
import * as dataJson from './data.json';

const dataList = [
  {
    position: [121.737959, 31.150690,],
    title: '庄宇彬家',
    type: 'customer',
  },
  {
    position: [120.737959, 30.150690],
    title: '庄宇彬家',
    type: 'customer',
  },
  {
    position: [121.71, 31.150690,],
    title: '庄宇彬家',
    type: 'customer',
  },
  {
    position: [121.75, 31.150690,],
    title: '庄宇彬家',
    type: 'customer',
  },
  {
    position: [121.78, 31.150690,],
    title: '庄宇彬家',
    type: 'customer',
  },
  {
    position: [121.79, 31.150690,],
    title: '庄宇彬家',
    type: 'customer',
  },
]

const defState = {
  mapInstance: {},
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
}

export const urgentStore = defineStore('urgent', {
  state: () => defState,
  actions: {
    saveNames(name) {
      console.log(' saveNames ： ', this, this.name,   )// 
      this.name = name;
    },
    saveMapInstance(mapInstance) {
      console.log(' saveMapInstance ： ', this.mapInstance, mapInstance,   )// 
      this.mapInstance = mapInstance;
    },
    async getDataListAsync(payload) {
      const data = await fetch(`/data.json`).then(res => res.json())
      console.log('  getDataListAsync data await 结果  ：', data,  )// 
      // const dataList = data.data.list.map((v) => ({
      //   position: [v[3], v[4]],
      //   title: v[1],
      //   type: 'customer',
      // }))
      this.dataList = dataList
      console.log('  this.dataList  ：', dataJson, dataList, this.dataList,  )// 
    },
    async getStatisticsAsync(payload) {
      const { data } = await services.getStatistics(payload);
      this.statistics = data
    },
    async getPVStatisticsAsync(payload) {
      const { data } = await services.getPVStatistics(payload);
      this.powerInstallInfo = data
    },
    async getEle7daysAsync(payload) {
      const { data } = await services.getEle7days(payload);
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
      this.historyElecCalc = {
        storagEnergy,
        cityEnergy,
        greenEnergy,
        xAxisData,
      };
    },
    async getGe30daysAsync(payload) {
      const { data } = await services.getGe30days(payload);
      const incomeData = []
      const xAxisData = []
      data.forEach((v, i) => {
        incomeData.push(v.fee)
        xAxisData.push(v.date)
      })
      const sum = toFixed(data.reduce((total, cuv) => total + cuv.fee, 0) * 0.9419)
      this.incomeTrendInfo = {
        incomeData,
        xAxisData,
        sum,
      };
    },
  },
})
