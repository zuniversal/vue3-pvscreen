<template>
  <div class='urgentSearchForm' @click.stop.prevent="e => {}"	>
    <a-input-group>
      <a-select
        class='select1'
        dropdownClassName='searchFormSelect'
        :bordered='false'
        v-model:value="type"
        show-search
        placeholder="点位名称"
        :options="options"
        :filter-option="filterOption"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      ></a-select>
      <div class='divider' />
      <a-select
        class='select2'
        dropdownClassName='searchFormSelect'
        :bordered='false'
        v-model:value="value"
        show-search
        placeholder="请输入"
        :options="dataList"
        :filter-option="filterOption"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      >
        <!-- <template #suffixIcon><search-outlined class="ant-select-suffix" /></template> -->
        <!-- <template #suffixIcon><MehOutlined class="ant-select-suffix" /></template> -->
      </a-select>
    </a-input-group>
  </div>
</template>

<script >
import { SelectProps } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
import { SmileOutlined, MehOutlined, SearchOutlined } from '@ant-design/icons-vue';
import { urgentStore } from "@/store/urgent";
// import { mapInstance } from "../index.jsx";

export default defineComponent({
  props: {
    mapInstance: {
      type: Object,
      default: {},
    },
  },
  setup(props, ) {
    console.log(' xxxxxxxxx       ： ', props,  )
    const urgentStores = urgentStore();
    const { dataList } = urgentStore();
    console.log(' xxxxxxxxx2       ： ', urgentStores, dataList, urgentStores.mapInstance, urgentStores.value, )
    // const dataLists = dataList.value.map((v) => ({value: v[0], label: v[1] }))
    const dataLists = dataList.map((v, index) => ({value: index, label: v.title, position: v.position,}))
    /**
     * 移动到指定位置
     */
    const moveToPosition = (item = []) => {
      const { mapInstance, mapObj, } = urgentStore();
      console.log(' xxxxxxxxx  mapInstance     ： ', mapInstance, urgentStores.mapInstance, urgentStores, )
      mapObj.clear();
      mapInstance.setZoomAndCenter(18, item.position);
      mapObj.renderPopInfoWindow(item);
    };

    const options = ref([
      { value: 'no', label: '户号' },
      { value: 'car', label: '车辆' },
      { value: 'man', label: '人员' },
    ]);
    const handleChange = (value, item) => {
      console.log(`selected ${value}`, item, item.position, item.position[0]);
      moveToPosition(item)
    };
    const handleBlur = () => {
      console.log('blur');
    };
    const handleFocus = () => {
      console.log('focus');
    };
    const filterOption = (input, option) => {
      return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };

    return {
      type: ref('no'),
      value: ref(undefined),
      filterOption,
      handleBlur,
      handleFocus,
      handleChange,
      options,
      dataList: dataLists,
    };
  },
});
</script>

<style lang='less'>
.searchFormSelect{    
  background: rgba(49,212,213,.5);
  .ant-select-item-option-active{
    background: rgba(49,212,213,.8);
  }
  .ant-select-item-option:hover{
    background: rgba(49,212,213,.6);
  }
}
.urgentSearchForm{
  z-index: 1;
  width: 100%;
  // position: fixed;
  left: 400px;
  top: 15px;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  .ant-select{
    margin: 10px;
  }
  .ant-input-group{
    border-bottom: 1px solid #31d4d5;
    background-color: rgba(49,212,213,.2);
    height: 34px;
    display: flex;
    align-items: center;
    .ant-select-selection-item{
      color: #fff;
      opacity: 1!important;
    }
    .select1{
      width: 92px;
      width: 70px;
      margin: 0;
      .ant-select-selector{
        padding: 0px 8px;
      }
    }
    .select2{
      // width: 150px;
      width: 100%;
    }
    .ant-select-arrow{
      color: white;
    }
    
    .divider{    
      height: 27px;
      width: 2px;
      background: rgba(49,212,213,.5);
    }
  }
  
}

</style>