<template>
  <div class='urgentSearchForm'>
    <a-select
      v-model:value="value"
      show-search
      placeholder="点位名称"
      style="width: 200px"
      :options="options"
      :filter-option="filterOption"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    ></a-select>
    <a-select
      v-model:value="value"
      show-search
      placeholder="根据省市"
      style="width: 200px"
      :options="options"
      :filter-option="filterOption"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    ></a-select>
  </div>
</template>

<script >
import { SelectProps } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const options = ref([
      { value: 'jack', label: 'Jack' },
      { value: 'lucy', label: 'Lucy' },
      { value: 'tom', label: 'Tom' },
    ]);
    const handleChange = (value) => {
      console.log(`selected ${value}`);
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
      value: ref(undefined),
      filterOption,
      handleBlur,
      handleFocus,
      handleChange,
      options,
    };
  },
});
</script>

<style lang='less'>
.urgentSearchForm{
  z-index: 1;
  position: fixed;
  left: 400px;
  top: 0;
  display: flex;
  flex-direction: column;
  .ant-select{
    margin: 10px;
  }
  
}

</style>