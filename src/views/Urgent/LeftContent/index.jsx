// import React, { useState, useEffect } from 'react';
import { ref, onMounted, defineComponent, } from 'vue';
import { useStore,  } from 'vuex'// 
import { defState,  } from '@/store/index';
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
import { urgentStore } from "@/store/urgent";

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
};

const isShowRealData = ref(false);
const isShowCom = ref(true);
const LeftContent = defineComponent({
  props: propsState,
  setup(props2, ctx) {
    // const props = state
    const store = useStore()
    const urgentStores = urgentStore();
    const props = urgentStores
    // console.log(' Home ： ', props, store.state, store.state.electricFee, store, props2, ctx, urgentStores, urgentStores.name); //
    const ajax = () => {
      const req = (props) => {
        urgentStores.getStatisticsAsync();
        urgentStores.getPVStatisticsAsync();
        urgentStores.getEle7daysAsync();
        urgentStores.getGe30daysAsync();
      }
      setInterval(() => {
        req(props)
      }, 10000)
      req(props)
    }
    
    onMounted(() => {
      ajax()
      isShowCom.value = false
      setTimeout(() => {
        isShowCom.value = true
      }, 1000)
    })

    const activeKey = ref(['1']);
    const onCollapseChange = (value, aa) => {
      console.log(' onCollapseChange ： ', value, aa,   )// 
      activeKey.value = value
    }

    return () => (
      <a-collapse className={`leftContentCollapse `} ghost activeKey={activeKey.value} onChange={onCollapseChange}>
        <a-collapse-panel key="1" header={<SearchForm mapInstance={props.mapInstance}></SearchForm>}>
          <div className={`leftContent `}>
            <EnergyCalc statistics={props.statistics}></EnergyCalc>
            <PowerInstallLiquid powerInstallInfo={props.powerInstallInfo}></PowerInstallLiquid>
            <HistoryElecCalc historyElecCalc={props.historyElecCalc}></HistoryElecCalc>
            <IncomeTrendChart incomeTrendInfo={props.incomeTrendInfo}></IncomeTrendChart>
          </div>
        </a-collapse-panel>
      </a-collapse>
    );
  }
});

export default LeftContent