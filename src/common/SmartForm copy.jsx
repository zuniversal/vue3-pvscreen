

import { defineComponent, reactive } from 'vue';
// import { UploadOutlined, InboxOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  // components: {
  //   UploadOutlined,
  //   InboxOutlined,
  // },
  setup(props, ctx) {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    const formState = reactive({
      'input-number': 3,
      'checkbox-group': ['A', 'B'],
      rate: 3.5,
      select: 'china',
      selectMultiple: ['red', 'green'],
    });
    // const formState = {
    //   'input-number': 3,
    //   'checkbox-group': ['A', 'B'],
    //   rate: 3.5,
    //   select: 'china',
    //   selectMultiple: ['red', 'green'],
    // }
    const onFinish = (values) => {
      console.log('Success:', values);
      fetch('/', {
        method: 'post',
        body: JSON.stringify(values),
        body: values,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(data) {
 
 
  })
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    
    return () => {
      // return <div className=''>AntdJsx</div>
      // v-bind={formItemLayout} 注意 如果使用了不支持存在的指令会导致报错  Uncaught (in promise) TypeError: Cannot read property 'deep' of undefined
      return <a-form
        model={formState}
        name={'validate_other'}
        {...formItemLayout}
        onFinishFailed={onFinishFailed}
        onFinish={onFinish}
      >
        <a-form-item label="Plain Text">
          <span class="ant-form-text">China</span>
        </a-form-item>
        <a-form-item
          name="select"
          label="Select"
          has-feedback
          rules={[{ required: true, message: 'Please select your country!' }]}
        >
          <a-select v-model={[formState.select, 'value']} v-model={formState.select} placeholder="Please select a country">
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
            v-model={[formState['selectMultiple'], 'value']}
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
            <a-input-number v-model={[formState['inputNumber'], 'value']} min="1" max="10" />
          </a-form-item>
          <span class="ant-form-text">machines</span>
        </a-form-item>

        <a-form-item name="switch" label="Switch">
          <a-switch v-model={[formState['switch'], 'checked']} />
        </a-form-item>

        <a-form-item name="slider" label="Slider">
          <a-slider
            v-model={[formState['slider'], 'value']}
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
          <a-radio-group v-model={[formState['radioGroup'], 'value']}>
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
          <a-radio-group v-model={[formState['radioButton'], 'value']}>
            <a-radio-button value="a">item 1</a-radio-button>
            <a-radio-button value="b">item 2</a-radio-button>
            <a-radio-button value="c">item 3</a-radio-button>
          </a-radio-group>
        </a-form-item>

        <a-form-item name="checkboxGroup" label="Checkbox.Group">
          <a-checkbox-group v-model={[formState['checkboxGroup'], 'value']}>
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
          <a-rate v-model={[formState['rate'], 'value']} allow-half />
        </a-form-item>

        <a-form-item name="upload" label="Upload" extra="longgggggggggggggggggggggggggggggggggg">
          <a-upload
            v-model={[formState['upload'], 'fileList']}
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
            <a-upload-dragger v-model={[formState['dragger'], 'fileList']} name="files" action="/upload.do">
              <p class="ant-upload-drag-icon"> 
                <InboxOutlined />
              </p>
              <p class="ant-upload-text">Click or drag file to this area to upload</p>
              <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
          </a-form-item>
        </a-form-item>


        <a-form-item wrapper-col={{ span: 12, offset: 6 }}>
          <a-button type="primary" htmlType="submit" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    }
  }
});
