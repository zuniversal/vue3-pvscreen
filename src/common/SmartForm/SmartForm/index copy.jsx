import { defineComponent, reactive, isVNode, } from 'vue';
import Vue from 'vue';
import moment from 'moment';
// import { UploadOutlined, InboxOutlined } from '@ant-design/icons-vue';
import { getLabel, defProps, rules, } from './config'// 

const bounceIn = '';

export default defineComponent({
  // components: {
  //   UploadOutlined,
  //   InboxOutlined,
  // },

  props: defProps,
  setup(props, ctx) {
    console.log(' SmartForm props ： ', props, ctx, ctx.attrs.com, isVNode, )// 
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const {
      test,
      ref: formRef,
      config,
      formProps,
      model,
      init,
      children,
      flexRow,
      formBtn,
      isRowBtn,
      onSubmit,
      onFail,
      onFieldChange,
      propsForm,
      isMockData,
      action,
      noPh,
      formLayouts,
      isSearchForm,
      isFormat,
      noBtnBlock,
      searchRight,
      isDisabledAll,
      noRuleAll,
      size,
      noLabelLayout,
    } = props;

    const formState = reactive({
      // 'input-number': 3,
      // 'checkbox-group': ['A', 'B'],
      // rate: 3.5,
      // select: 'china',
      // selectMultiple: ['red', 'green'],

      customcom: "zyb",
      info: "zyb",
      company: ['业务员',],
      formItemIn: 3,
      radioGroup2: "b",
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

    const getData = () => {
      console.log(' getData   ,   ： ', formState,  )
      return formState 
    }

    // const formState = {
    //   'input-number': 3,
    //   'checkbox-group': ['A', 'B'],
    //   rate: 3.5,
    //   select: 'china',
    //   selectMultiple: ['red', 'green'],
    // }
    const onFinish = (values) => {
      console.log('Success:', values, JSON.parse(JSON.stringify(values)) );
      vlog('Success:', values, JSON.parse(JSON.stringify(values)) );
      test(values)
      // fetch('/', {
      //   method: 'post',
      //   body: JSON.stringify(values),
      //   body: values,
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // }).then(function(data) {
    
      // })
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    
    
    const initialValues = init
    // const initialValues = Object.keys(init).length
    //   ? init
    //   : // : isMockData && (action && action !== 'add')
    //   isMockData && true
    //   ? mockFormData(configs, init)
    //   : initData;
    const configs = config
    // const configs = isFormat
    //   ? formatConfig(config, { isSearchForm, isDisabledAll, action })
    //   : config;
    const formItems = configs.map((item, i) => {
      console.log(' isVNode(items) ： ', isVNode(item), item, isVNode, )//
      const isVNodeItem = isVNode(item)
      const isCustomCom = item.formType === 'CustomCom'
      if (isVNodeItem || isCustomCom) {
        const isFormItem = item.type?.name === "AFormItem"
        const isString = typeof item.type === "string"
        console.log(' isFormItem ： ', isFormItem, item, item.type?.name, isString, typeof item.type)// 
        if (isFormItem) {
          return item 
        }
        if (isString) {
          console.log(' 普通dom ： ', item   )// 
          return <a-form-item
            label="  "
            {...item.comProps}
            colon={false}
          >
            {item}
          </a-form-item>
        }
        if (isCustomCom) {
          console.log(' 普通 isCustomCom ： ', item   )// 
          return <a-form-item
            label="  "
            {...item.itemProps}
            colon={false}
          >
            {item.children}
          </a-form-item>
        }
      }
      console.log(' item ： ', item, )//
      
      const items = { formType: 'Input', ...item };
      const {
        formType = 'Input',
        checkboxContent,
        itemProps,
        comProps,
        radioOptions,
        selectOptions,
        customLabel,
        rowText,
        extra,
        type,
        noRule,
        radioData = [],
        checkboxData = [],
        selectData = [],
        // selectSearch = () => {},
        selectSearch,
        opType,
        haveDivider,
        isSearchForm,
        searchSuffix,
        CustomCom,
        PropsCom,
        noLabel,
        LabelCom,
        plainText,
        ruleExtra,
        formRules,
      } = items;

      const flexRows = items.flexRow ? items.flexRow : flexRow;

      // if (typeof type === 'function') {
      // if (isValidElement(items)) {
      //   return items;
      // }

      if ((!formType || formType === 'Input') && isSearchForm) {
        items.comProps.onPressEnter = props.getList;
      }

      const { label } = itemProps;
      const itemPropsCls =
        itemProps.class +
        `${i === configs.length - 1 ? ' lastFormItem' : ''}`;

      const formItemCommonProps = {
        colon: false,
        ...itemProps,
      };

      if (noLabel) {
        formItemCommonProps.label = '';
      }
      // if (
      //   formType === 'Radio' ||
      //   formType === 'Switch' ||
      //   formType === 'Checkbox'
      // ) {
      //   console.log(
      //     ' formItemCommonPropsformItemCommonPropsformItemCommonProps ： ',
      //     formType,
      //   );
      //   // formItemCommonProps.valuePropName = `checked`;
      // }

      // if (formType === 'Dynamic') {
      //   console.log(' formTypeformType ： ', formItemCommonProps, formType, formType === 'Dynamic'    )//
      //   formItemCommonProps.class = `dynamicRow ${formItemCommonProps.class}  `
      // }

      const formItemDividerProps = {
        ...formItemCommonProps,
        class: `formItems w100 ${bounceIn} ${itemPropsCls}  `,
      };
      const formItemNoRuleProps = {
        ...formItemCommonProps,
        class: `formItems rowText ${bounceIn} ${itemPropsCls}  `,
      };
      const formItemProps = {
        rules: formRules
          ? formRules
          : noRule || noRuleAll
          ? undefined
          : rules({ items, label, ruleExtra }),
        ...formItemCommonProps,
        class: `formItems ${bounceIn} ${itemPropsCls}  `,
      };

      const formLabel = customLabel ? customLabel : getLabel(label, formType);
      // console.log('  formLabel ：', formLabel,  )//

      const placeholder =
        noPh || action === 'detail' || isDisabledAll ? '' : formLabel;
      // conso
      if (searchSuffix) {
        comProps.suffix = <SearchOutlined class="searchIcon" />;
      }
      if (noLabel) {
        // console.log(' noLabel ： ');
        // comProps.wrapperCol = {
        //   sm: { span: 10 },
        // };
      }

      const realComProps = {
        // class: 'w-320',
        placeholder: placeholder,
        ...comProps,
        vModel: [model['formItemIn'], 'value'],
      };

      const dynamicComProps = {
        // class: 'w-320',
        ...comProps,
        // comProps: {...comProps, class: `${comProps.class} dynamiRow` },
        isDisabledAll,
        placeholder: placeholder,
        name: formItemProps.key,
        init: initialValues[comProps?.key],
      };

      // console.log(
      //   ' realComProps11 ： ',
      //   realComProps,
      //   itemProps,
      //   formItemProps,
      //   comProps,
      //   initialValues,
      //   formItemLayout,
      // );

      // const renderRadioOptions = renderRadioOp(radioData, opType, )
      // const renderSelectOptions = renderSelectOp(selectData, opType, )

      const onChange = e => {
        console.log(' onChange   e,  ,   ： ', e);
      };
      const onSearch = e => {
        console.log(' onSearch   e,  ,   ： ', e);
      };
      const onSelect = e => {
        console.log(' onSelect   e,  ,   ： ', e);
      };

      const selectProps = {
        allowClear: true,
        filterOption: true,
        ...realComProps,
        showSearch: true,
        // onChange: onChange,
        // onSearch: onSearch,
        // onSelect: onSelect,
      };
      if (formType === 'Search') {
        // selectProps.showArrow = false;
        // selectProps.labelInValue = true;
        selectProps.optionFilterProp = selectProps.optionFilterProp || 'children';
        // console.log(' selectSearch ： ', selectProps, item.selectSearch);
        if (item.selectSearch) {
          // Select 添加 showSearch 属性可以实现搜索功能，但是这个搜索是搜的Select的value值的,但是value值在页面上是看不到的
          // selectProps.onSearch = debounce(item.selectSearch, 1500);
          // selectProps.onSearch = item.selectSearch
        }
      }
      // const selectCom = (
      //   <Select {...selectProps}>{renderSelectOp(selectData, opType)}</Select>
      // );

      const formItemMap = {
        rowText: label,
        Label: LabelCom,
        CustomCom: CustomCom,
        PlainText: (
          <span class={`plainText`} {...comProps}>
            {plainText}
          </span>
        ),
        Divider: <a-divider />,
        Input: (
          <a-input
            allowClear
            maxLength={32}
            onPressEnter={e => {
              console.log(' onPressEnter ： ', e);
            }}
            {...realComProps}
          />
        ),
        InputNumber: <a-input-number allowClear maxLength={32} {...realComProps} />,
        TextArea: (
          <a-textarea
            autoSize={{
              minRows: 4,
              // maxRows: 5
            }}
            allowClear
            {...realComProps}
          />
        ),
        Select: <a-select placeholder="ph"></a-select>,
        Search: <a-select placeholder="ph"  {...realComProps}></a-select>,
        Password: <a-input-password {...realComProps} />,
        Cascader: <a-cascader {...realComProps} />,
        AutoComplete: (
          <a-auto-complete {...realComProps}>
            <a-input />
          </a-auto-complete>
        ),
        Checkbox: <a-checkbox-group {...realComProps}></a-checkbox-group>,
        CheckboxItem: <a-checkbox {...realComProps} />,
        Radio: <a-radio-group {...realComProps}></a-radio-group>,
        Switch: <a-switch {...realComProps} />,
        DatePicker: <a-date-picker {...realComProps}  />,
        DatePicker: <a-date-picker {...realComProps} picker="month" />,
        RangePicker: (
          <a-range-picker
          
            format={'YYYY/MM/DD'}
            ranges={{
              今天: [moment(), moment()],
              这个月: [moment().startOf('month'), moment().endOf('month')],
            }}
            {...realComProps}
          />
        ),
        TreeSelect: (
          <a-tree-select
            treeDefaultExpandAll
            allowClear
            showSearch
            // filterTreeNode={false}
            treeNodeFilterProp={'label'}
            {...realComProps}
          ></a-tree-select>
        ),
      };

      const formItemCom = formItemMap[formType]; 
      // return <a-form-item name={`x${Math.random()}`} rules={[{ required: true, message: 'Please pick an item!' }]} label="Radio.Group">
      //   <a-radio-group >
      //     <a-radio value="a">item 1</a-radio>
      //     <a-radio value="b">item 2</a-radio>
      //     <a-radio value="c">item 3</a-radio>
      //   </a-radio-group>
      // </a-form-item>
      return <a-form-item
        {...formItemProps}
      >
        {formItemCom}
      </a-form-item>
    })

    console.log(' formItems ： ', formItems,  )// 
    return () => {
      // return <div class=''>AntdJsx</div>
      // v-bind={formItemLayout} 注意 如果使用了不支持存在的指令会导致报错  Uncaught (in promise) TypeError: Cannot read property 'deep' of undefined
      return <a-form
        model={formState}
        model={model}
        ref={formRef}
        name={'smartForm'}
        {...formItemLayout}
        onFinishFailed={onFinishFailed}
        onFinish={onFinish}
      >
        {ctx.attrs.com}
        {ctx.attrs.formItem}
        {formItems}
        <a-form-item label="Plain Text">
          <span class="ant-form-text">China</span>
        </a-form-item>
        <a-form-item
          name="select"
          label="Select"
          has-feedback
          rules={[{ required: true, message: 'Please select your country!' }]}
        >
          <a-select v-model={[formState.select, 'value']} v-model={model.select} placeholder="Please select a country">
            <a-select-option value="china">China</a-select-option>
            <a-select-option value="usa">U.S.A</a-select-option>
          </a-select>
        </a-form-item>
        
        <a-form-item
          name="selectMultiple"
          label="Select[multiple]"
          rules={[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]}
        >
          <a-select
            v-model={[model['selectMultiple'], 'value']}
            mode="multiple"
            placeholder="Please select favourite colors"
          >
            <a-select-option value="red">Red</a-select-option>
            <a-select-option value="green">Green</a-select-option>
            <a-select-option value="blue">Blue</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="InputNumber">
          <a-form-item name="inputNumber" no-style>
            <a-input-number v-model={[model['inputNumber'], 'value']} min="1" max="10" />
          </a-form-item>
          <span class="ant-form-text">machines</span>
        </a-form-item>

        <a-form-item name="switch" label="Switch">
          <a-switch v-model={[model['switch'], 'checked']} />
        </a-form-item>

        <a-form-item name="slider" label="Slider">
          <a-slider
            v-model={[model['slider'], 'value']}
            marks={{
              0: 'A',
              20: 'B',
              40: 'C',
              60: 'D',
              80: 'E',
              100: 'F',
            }}
          />
        </a-form-item>

        <a-form-item name="radioGroup" label="Radio.Group">
          <a-radio-group v-model={[model['radioGroup'], 'value']}>
            <a-radio value="a">item 1</a-radio>
            <a-radio value="b">item 2</a-radio>
            <a-radio value="c">item 3</a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          name="radioButton"
          label="Radio.Button"
          rules={[{ required: true, message: 'Please pick an item!' }]}
        >
          <a-radio-group v-model={[model['radioButton'], 'value']}>
            <a-radio-button value="a">item 1</a-radio-button>
            <a-radio-button value="b">item 2</a-radio-button>
            <a-radio-button value="c">item 3</a-radio-button>
          </a-radio-group>
        </a-form-item>

        <a-form-item name="checkboxGroup" label="Checkbox.Group">
          <a-checkbox-group v-model={[model['checkboxGroup'], 'value']}>
            <a-row>
              <a-col span="8">
                <a-checkbox value="A" style="line-height: 32px">A</a-checkbox>
              </a-col>
              <a-col span="8">
                <a-checkbox value="B" style="line-height: 32px" disabled>B</a-checkbox>
              </a-col>
              <a-col span="8">
                <a-checkbox value="C" style="line-height: 32px">C</a-checkbox>
              </a-col>
              <a-col span="8">
                <a-checkbox value="D" style="line-height: 32px">D</a-checkbox>
              </a-col>
              <a-col span="8">
                <a-checkbox value="E" style="line-height: 32px">E</a-checkbox>
              </a-col>
              <a-col span="8">
                <a-checkbox value="F" style="line-height: 32px">F</a-checkbox>
              </a-col>
            </a-row>
          </a-checkbox-group>
        </a-form-item>

        <a-form-item name="rate" label="Rate">
          <a-rate v-model={[model['rate'], 'value']} allow-half />
        </a-form-item>

        {/* <a-form-item name="upload" label="Upload" extra="longgggggggggggggggggggggggggggggggggg">
          <a-upload
            v-model={[model['upload'], 'fileList']}
            name="logo"
            action="/upload.do"
            list-type="picture"
          >
            <a-button>
              <UploadOutlined />
              Click to upload
            </a-button>
          </a-upload>
        </a-form-item>

        <a-form-item label="Dragger">
          <a-form-item name="dragger" no-style>
            <a-upload-dragger v-model={[model['dragger'], 'fileList']} name="files" action="/upload.do">
              <p class="ant-upload-drag-icon"> 
                <InboxOutlined />
              </p>
              <p class="ant-upload-text">Click or drag file to this area to upload</p>
              <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
          </a-form-item>
        </a-form-item>
 */}

        <a-form-item wrapper-col={{ span: 12, offset: 6 }}>
          <a-button type="primary" htmlType="submit" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    }
  }
});
