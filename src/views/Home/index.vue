

<template>
  <div class='home ${isMobile.value}'>
    <SystemTitle></SystemTitle>

    <div class="left">
      <EnergyCalc :statistics='props.statistics'></EnergyCalc>
      <CarbonAssets :carbonAssets='props.carbonAssets'></CarbonAssets>
      <PowerInstallLiquid :powerInstallInfo='props.powerInstallInfo'></PowerInstallLiquid>
      <HistoryElecCalc :historyElecCalc='props.historyElecCalc'></HistoryElecCalc>
    </div>

    <div class="center">
      <div class="centerBox powerInfoWrapper">
        <PowerInfo :realStatus='props.realStatus'></PowerInfo>
        <EnvInfo
          :temperatureHumidityInfo='props.temperatureHumidityInfo'
        ></EnvInfo>
        <div class="factoryTitle ">来宾市城东污水处理厂</div>
      </div>
    </div>
    <div class="right">
      <div class="righBlock">
        <ElectricPie :electricFee='props.electricFee'></ElectricPie>
        <IncomeTrendChart :incomeTrendInfo='props.incomeTrendInfo'></IncomeTrendChart>
        <PowerLineChart :powerlineInfo='props.powerlineInfo' :powerlineParams='props.powerlineParams' :getPowerlineInfoAsync='props.getPowerlineInfoAsync'></PowerLineChart>
      </div>
    </div>
  </div>
</template>

<script setup>
// import React, { useState, useEffect } from 'react';
import { ref, onMounted, defineComponent, defineProps, } from 'vue';
import { useStore,  } from 'vuex'// 
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
import debounce from 'lodash/debounce';

// const mapStateToProps = ({ home }) => home;

const resize = debounce(() => {
  console.log('useEffect resize debounce ： ');
  window.location.reload();
}, 500);

const state = {
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
const props = defineProps({
  realData: {
    type: Object,
    defaults: {},
  },
  electricFeeParams: {
    type: Object,
    defaults: {
      sn: "00018469010327",
    },
  },
  electricFee: {
    type: Object,
    defaults: {
      ep: [],
      fee: [],
      epSum: 0,
      feeSum: 0,
      feeAvg: 0,
    },
  },
  powerlineParams: {
    type: Object,
    defaults: {
      start_time: `${nowYearMonthDayFull} 00:00:00`,
      end_time: `${nowYearMonthDayFull} 23:59:59`,
      query: POWER_CURVE,
    },
  },
  powerlineInfo: {
    type: Object,
    defaults: {},
  },
  powerlineInfo: {
    type: Object,
    defaults: [],
  },
  realDataStatistics: {
    type: Object,
    defaults: {
      ep: 0,
      ep: 0,
    },
  },
  temperatureHumidityInfo: {
    type: Object,
    defaults: {},
  },
  statistics: {
    type: Object,
    defaults: {
      today: {},
      this_month: {},
      battery: {},
    },
  },
  powerInstallInfo: {
    type: Object,
    defaults: {
      pv: {},
      ps: {},
    },
  },
  historyElecCalc: {
    type: Object,
    defaults: {
      storagEnergy: [],
      cityEnergy: [],
      greenEnergy: [],
      xAxisData: [],
    },
  },
  incomeTrendInfo: {
    type: Object,
    defaults: {
      incomeData: [],
      xAxisData: [],
      sum: 0,
    },
  },
  realStatus: {
    type: Object,
    defaults: {
      pv: {},
      ps: {},
      ld: {},
      gd: {},
      status: 11,
    },
  },
  carbonAssets: {
    type: Object,
    defaults: {},
  },
});
console.log(' props ： ', props,  )// 
// statistics
// carbonAssets
// powerInstallInfo
// historyElecCalc
// realDataStatistics
// realData
// electricFee
// incomeTrendInfo
// powerlineInfo
// powerlineParams
// getPowerlineInfoAsync
// realStatus
// temperatureHumidityInfo

const isShowRealData = ref(false);
const isShowCom = ref(true);
const hotNum = ref(6)


const { isMobile, } = usePlatform()
// const [isShowRealData, setIsShowRealData] = useState(false);
// const [isShowCom, setIsShowCom] = useState(true);
console.log(' isMobile ： ', isMobile, isShowRealData.value,  )// 
const setIsShowRealData = () => {
  console.log(' setIsShowRealData   ,   ： ',   )
  
}
const setIsShowCom = () => {
  console.log(' setIsShowCom   ,   ： ',   )
  
}
// const toggleShowRealData = params => setIsShowRealData(!isShowRealData);
const toggleShowRealData = () => {
  console.log(' toggleShowRealData   ,   ： ', isShowRealData, isShowRealData.value, props, )
  isShowRealData.value = !isShowRealData.value
}
const changeHotNum = () => {
  console.log(' changeHotNum   ,   ： ', hotNum.value,  )
  hotNum.value +=  1
}
// const [isShowRealData, setIsShowRealData] = useState(true);

// useEffect(() => {
//   console.log(' useEffect  ： ');
//   setIsShowCom(!isShowCom)
//   setTimeout(() => {
//     console.log('  延时器 ： ',  )
//     setIsShowCom(!isShowCom)
//   }, 5000)
// }, []);

const store = useStore()
const ajax = () => {
  console.log(' useEffectuseEffect  ： ', props, store, );
  const req = (props) => {
    console.log(' Home useEffect req   ,   ： ', props,  )
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
  // setInterval(() => {
  //   req(props)
  // // }, 300000)
  // }, 10000)
  req(props)
}
setTimeout(() => {
}, 3000);

onMounted(() => {
  console.log(' Home onMounted ： ',    )// 
  ajax()
})

</script>
