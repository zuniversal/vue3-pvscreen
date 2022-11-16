<template>
  <div>
    AntdAntd
    <SmartForm :config='clientInfoConfig'></SmartForm>
  </div>
</template>

<script setup>
// import SmartForm from '@/common/SmartForm'// 
import SmartForm from '@/common/SmartForm/index.jsx'// 
import { defineComponent, reactive, } from 'vue';

const formState = reactive({
  // 'input-number': 3,

  checkboxGroup: ["E", "F"],
  inputNumber: 3,
  radioButton: "b",
  radioGroup: "b",
  rate: 2.5,
  select: "usa",
  selectMultiple: ["red", "green"],
  slider: 36,
  switch: true,
});

const clientInfoConfig = [
  {
    itemProps: {
      label: '基本信息',
      className: 'w100',
      name: 'info',
    },
  },
  {
    flexRow: 1,
    formType: 'Search',
    itemProps: {
      label: '服务企业',
      name: 'service_enterprise_id',
    },
    comProps: {
      className: 'rowInput ',
      mode: "multiple",
      // tagRender: (p) => {
      //   console.log(' tagRender p ： ', p,  )// 
      //   return <a-tag color="orange" style="margin-right: 3px">
      //     { p.label }&nbsp;&nbsp;
      //   </a-tag>
      // },
      options : [
        {
          label: '客户',
          value: '客户',
        },
        {
          label: '业务员',
          value: '业务员',
        },
      ],
    },
  },
  {
    noRule: true,
    formType: 'CustomCom',
    CustomCom: <div>CustomComCustomCom</div>,
    itemProps: {
      label: '',
      name: 'block',
      // className: 'ant-col-12 ',
    },
  },
  <div class='divCom'>
    vnode
    <a-tag color="red">red</a-tag>
  </div>,
  // <a-input-number v-model={[formState['inputNumber'], 'value']} min="1" max="10" />
  <a-form-item name="formItemIn" label="InputNumber" rules={[{ required: true, message: 'Please pick an item!' }]}>
    <a-form-item name="formItemIn" >
      <a-input-number min="1" max="10" />
    </a-form-item>
    <span class="ant-form-text">bbb</span>
  </a-form-item>,
  <a-form-item name="radioGroup2" label="Radio.Group">
    <a-radio-group >
      <a-radio value="a">item 1</a-radio>
      <a-radio value="b">item 2</a-radio>
      <a-radio value="c">item 3</a-radio>
    </a-radio-group>
  </a-form-item>,
  <a-form-item name="radioGroup3" label="Radio.Group">
    <span class="ant-form-text">666</span>
  </a-form-item>
]
</script>

<style>
</style>