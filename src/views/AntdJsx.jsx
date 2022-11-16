import { ref, onMounted, defineComponent, createApp, } from 'vue';
// import SmartForm from '@/common/SmartForm.jsx'// 
import SmartForm from '@/common/SmartForm/index.jsx'// 
  
const count = ref(0)
export default defineComponent({
  setup(props, ctx) {
    return () => {
      console.log(' AntdJsx ： ',    )// 
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
      
      return <div className=''>
        AntdJsx
        <SmartForm {...props} com={com} formItem={formItem} ></SmartForm>
      </div>
    } 
  }
});

const AntdJsx2 = props => {
  return <div className=''>
    AntdJsx
    <SmartForm {...props}></SmartForm>
  </div>
};

// export default AntdJsx;
