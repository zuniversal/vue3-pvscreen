import { ref, onMounted, defineComponent, reactive, } from 'vue';
// import SmartForm from '@/common/SmartForm.jsx'// 
// import SmartForm from '@/common/SmartForm/index.jsx'// 
// import {SmartForm} from '@/common'// 
// import { SmartForm } from '@/common/SmartForm/index.js'// 
import * as SmartFormSmartForm from '@/common/SmartForm/index.js'// 
// import SmartForm from '@/common/SmartForm/SmartFormEl'// 
// import {comDefProps} from '@/common'
// import * as SmartAntd from '@/common'
import SmartAntd from 'vue-smart-antdv'
import { SmartForm } from 'vue-smart-antdv'
import { comDefProps } from 'vue-smart-antdv'
import { dataConfig } from '@/common/SmartForm/data'// 
import useForm from './useForm'// 
import RefCom from './RefCom'// 
import RefComJSX from './RefComJSX.jsx'// 
import RefComJSXdc from './RefComJSXdc.jsx'// 
import SmartFormReg from './SmartFormReg.jsx'// 

// const {SmartForm} = SmartAntd
// console.log(' SmartAntd ： ', SmartAntd, SmartAntd.comDefProps )// 
console.log(' SmartFormSmartForm ： ', SmartFormSmartForm, SmartForm )// 
// console.log(' SmartForm ： ', SmartForm,  )// 

export default defineComponent({
  setup(props, ctx) {
    return () => {
      console.log(' AntdJsx ： ',    )// 
      const count = ref(0)
      const add = () => {
        console.log(' add   ,   ： ', count.value,  )
        count.value++
      }

      const com = <button onClick={add}>
        {count.value}
      </button>

      const formItem = <a-form-item label="Plain Text">
        <span class="ant-form-text">{com}</span>
      </a-form-item>
      
      const getFormValue = (data) => {
        console.log(' getFormValue   ,   ： ', data, formRef.value, formRef )
      }

      const useFormConfig = useForm()
      console.log(' useFormConfig ： ', useFormConfig,  )// 

      const formStateObj = {
        xxxxxxxxxxxxxx: "其它属性",
        customCom: "CustomComzyb",
        formItemInput: 888,
        text: 'texttexttext',
        radioGroup2: "b",

        input: "15160208606",
        inputNumber: 8,
        password: "666666",
        textarea: "textarea888",
        select: "业务员",
        search: ['业务员',],
        switch: false,
        radio: "b",
        radioGroup: "b",
        checkbox: ["a", "b"],
        // datePicker: undefined,
        // monthPicker: undefined,
        // rangePicker: undefined,
        rate: 2.5,
        slider: 80,
        cascader: ["zhejiang", "hangzhou", "xihu"],
        autoComplete: "Downing Street",
        treeSelect: ["tree2"],
      }
      const formState = reactive(formStateObj);

      const varLabel = ref('varLabel')

      const clientInfoConfig = ({formState}) => [
        ...dataConfig,
        {
          flexRow: 1,
          formType: 'Search',
          itemProps: {
            label: varLabel.value,
            name: 'searchTest',
          },
          comProps: {
            mode: "multiple",
            'v-model': [formState['search'], 'value'],
            'vModel': [formState['search'], 'value'],
            'vModel': formState['search'],
            tagRender: (p) => {
              console.log(' tagRender p ： ', p,  )// 
              return <a-tag color="orange" style="margin-right: 3px">
                { p.label }&nbsp;&nbsp;
              </a-tag>
            },
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
          CustomCom: <div>自定义组件</div>,
          children: ({formState}) => (<>
            <div>自定义组件children</div>
            <a-form-item name="customcom" >
              <a-input v-model={[formState['customcom'], 'value']} />
            </a-form-item>
          </>),
          itemProps: {
            label: 'CustomCom',
            name: 'customCom',
          },
        },
        <div class='divCom'>
          vnode
          <a-tag color="red">red</a-tag>
        </div>,
        <a-form-item name="formItemInput" label="formItemInput" rules={[{ required: true, message: 'Please pick an item!' }]}>
          <a-form-item name="formItemInput" >
            <a-input-number vModel={[formState['formItemInput'], 'value']} min="1" max="10" />
          </a-form-item>
          <span class="ant-form-text">bbb</span>
        </a-form-item>,
        <a-form-item name="radioGroup2" label="radioGroup2">
          <a-radio-group v-model={[formState['radioGroup2'], 'value']} >
            <a-radio value="a">item 1</a-radio>
            <a-radio value="b">item 2</a-radio>
            <a-radio value="c">item 3</a-radio>
          </a-radio-group>
        </a-form-item>,
        <a-form-item name="text" label="text">
          <span class="ant-form-text">texttext</span>
        </a-form-item>,
      ]

      const formRef = ref();
      console.log(' formRefformRef1 ： ', formRef,  )//
      
      onMounted(() => {
        console.log(' onMounted formRef ： ', formRef,  )//

      }) 

      const getRes = () => {
        console.log(' getRes  formRef ,   ： ', formRef  )
        console.log(' formRef.value.data ： ', formRef.value.data,  )// 
        // formRef.value.childFn()
        console.log(' getRes  formRef.value.formRef.value ,   ： ', formRef.value.formRef  )
        const res = formRef.value.formRef.getFieldsValue()
        console.log('  formRef res ：', res,  )// 
      }
      
      const slotsCom = {
        topSlot: () => <div style={{textAlign: 'center'}}>父组件传递 topSlot</div>,
        bottomSlot: () => <div style={{textAlign: 'center'}}>父组件传递 bottomSlot</div>,
      }

      const propsFn = (params) => {
        console.log(' propsFn   ,   ： ', params, count.value )
        varLabel.value = params.name + count.value++
      }
      const eventAttr = {
        propsFn,
      }

      // return <SmartFormReg></SmartFormReg> 
      return <div className=''>

        <a-button type="primary" onClick={getRes}>getRes</a-button>
        {/* <RefCom ref={formRef} ></RefCom> */}
        {/* <RefComJSX ref={formRef} ></RefComJSX> */}
        {/* <RefComJSXdc ref={formRef} ></RefComJSXdc> */}

        <el-button type="primary" onClick={getRes}>getRes</el-button>
        <el-button>Cancel</el-button>
        <SmartForm 
          // ref={formRef.value} 
          eventAttr={eventAttr} 
          propsFn={propsFn} 
          ref={formRef} 
          config={clientInfoConfig} 
          init={formState} 
          getFormValue={getFormValue} 
          model={formState} 
          
          formItem={formItem} 
          {...props} 
          formRef={formRef} 
          com={com} 
          props={{ model: formState }}
        >
          {slotsCom}
        </SmartForm>
      </div>
    } 
  }
});

// const AntdJsx2 = props => {
//   return <div className=''>
//     AntdJsx
//     <SmartForm {...props}></SmartForm>
//   </div>
// };

// export default AntdJsx;
