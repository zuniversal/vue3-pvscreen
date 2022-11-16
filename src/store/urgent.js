import { defineStore,  } from 'pinia'// 
import * as services from '@/services/home';
import { nowYearMonthDayFull, toFixed } from '@/utils';

const defState = {
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

export const urgentStore = defineStore('home', {
  state: () => defState,
  actions: {
    saveNames(name) {
      console.log(' saveNames ： ', this, this.name,   )// 
      this.name = name;
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
