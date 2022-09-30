// import React, { useState, useEffect } from 'react';
import { ref, onMounted, defineComponent, } from 'vue';
import { useStore,  } from 'vuex'// 
import { defState,  } from '@/store/index';
import '@/static/css/index.less';
import { nowYearMonthDayFull, toFixed } from '@/utils';
import { POWER_CURVE } from '@/views/Home/PowerLineChart';
import './style.less';
import usePlatform from '@/hooks/usePlatform';
import SystemTitle from './SystemTitle';
import IncomeTrendChart from './IncomeTrendChart';
import PowerLineChart from './PowerLineChart';
import PowerInstallLiquid from './PowerInstallLiquid';
import HistoryElecCalc from './HistoryElecCalc';
import EnergyCalc from './EnergyCalc';
import CarbonAssets from './CarbonAssets';
import EnvInfo from './EnvInfo';
import PowerInfo from './PowerInfo';
import RealData from './RealData';
import RealDataDesc from './RealDataDesc';
import ElectricPie from './ElectricPie';

const state = defState
const propsState = {
  realData: {
    type: Object,
    default: {},
  },
  electricFeeParams: {
    type: Object,
    default: {
      sn: "00018469010327",
    },
  },
  electricFee: {
    type: Object,
    default: {
      ep: [],
      fee: [],
      epSum: 0,
      feeSum: 0,
      feeAvg: 0,
    },
  },
  powerlineParams: {
    type: Object,
    default: {
      start_time: `${nowYearMonthDayFull} 00:00:00`,
      end_time: `${nowYearMonthDayFull} 23:59:59`,
      query: POWER_CURVE,
    },
  },
  powerlineInfo: {
    type: Object,
    default: {},
  },
  powerlineInfo: {
    type: Object,
    default: [],
  },
  realDataStatistics: {
    type: Object,
    default: {
      ep: 0,
      ep: 0,
    },
  },
  temperatureHumidityInfo: {
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
  realStatus: {
    type: Object,
    default: {
      pv: {},
      ps: {},
      ld: {},
      gd: {},
      status: 11,
    },
  },
  carbonAssets: {
    type: Object,
    default: {},
  },
};

const isShowRealData = ref(false);
const isShowCom = ref(true);
const hotNum = ref(6)
// export default (props2 = state) => {
export default defineComponent({
  props: propsState,
  setup(props2, ctx) {
  // const props = state
  const store = useStore()
  const props = store.state
  console.log(' Home ： ', props, store.state, store.state.electricFee, store, props2, ctx, ); //
  const { isMobile, } = usePlatform()
  console.log(' isMobile ： ', isMobile, isShowRealData.value, isShowCom.value,  )// 
  const toggleShowRealData = () => {
    isShowRealData.value = !isShowRealData.value
  }
  const getPowerlineInfoAsync = (params) => {
    store.dispatch('getPowerlineInfoAsync', params);
  }
  const ajax = () => {
    const req = (props) => {
      store.dispatch('getRealDataAsync', );
      store.dispatch('getElectricFeeAsync', props.electricFeeParams);
      store.dispatch('getPowerlineInfoAsync', );
      store.dispatch('getRealDataStatisticsAsync', );
      store.dispatch('getTemperatureHumidityAsync', );
      store.dispatch('getStatisticsAsync', );
      store.dispatch('getPVStatisticsAsync', );
      store.dispatch('getEle7daysAsync', );
      store.dispatch('getGe30daysAsync', );
      store.dispatch('getRealStatusAsync', );
      store.dispatch('getCarbonAssetsAsync', );
    }
    setInterval(() => {
      req(props)
    // }, 300000)
    }, 10000)
    req(props)
  }
  
  onMounted(() => {
    console.log(' Home onMounted ： ',    )// 
    ajax()
    isShowCom.value = false
    setTimeout(() => {
      console.log('  延时器 ： ',  )
      isShowCom.value = true
    }, 1000)
  })

  const leftCom = () => <div className="left">
    <EnergyCalc statistics={props.statistics}></EnergyCalc>
    <CarbonAssets carbonAssets={props.carbonAssets}></CarbonAssets>
    <PowerInstallLiquid powerInstallInfo={props.powerInstallInfo}></PowerInstallLiquid>
    <HistoryElecCalc historyElecCalc={props.historyElecCalc}></HistoryElecCalc>
  </div>
  const rightCom = () => <div className="right">
    <RealData realDataStatistics={props.realDataStatistics} toggleShowRealData={toggleShowRealData}></RealData>
    {isShowRealData.value ? (
      <RealDataDesc realData={props.realData}></RealDataDesc>
    ) : (
      <div className="righBlock">
        <ElectricPie electricFee={props.electricFee}></ElectricPie>
        <IncomeTrendChart incomeTrendInfo={props.incomeTrendInfo}></IncomeTrendChart>
        <PowerLineChart powerlineInfo={props.powerlineInfo} powerlineParams={props.powerlineParams} getPowerlineInfoAsync={getPowerlineInfoAsync}></PowerLineChart>
      </div>
    )}
  </div>

  return () => (
    <div className={`home ${isMobile.value}`}>
      <SystemTitle></SystemTitle>
      
      {isShowCom.value ? leftCom() : null}

      <div className="center">
        <div className="centerBox powerInfoWrapper">
          <PowerInfo realStatus={props.realStatus}></PowerInfo>
          <EnvInfo
            temperatureHumidityInfo={props.temperatureHumidityInfo}
          ></EnvInfo>
          <div className="factoryTitle ">来宾市城东污水处理厂</div>
        </div>
      </div>
      
      {isShowCom.value ? rightCom() : null}
      {/* <PowerLineChart></PowerLineChart> */}
    </div>
  );
}
});

// export default Home;
