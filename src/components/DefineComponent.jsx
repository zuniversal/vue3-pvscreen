
import { useStore,  } from 'vuex'// 
import { defineComponent, reactive, ref, computed, watchEffect } from 'vue'
import './DefineComponent.scss'// 
import * as style from './style.module.scss'// 
import * as style2 from './DefineComponent.scss'// 
import { useSlots, useAttrs } from 'vue'
import JSXSon from './JSXSon'// 
import DefineSon from './DefineSon'// 
import JSXRender from './JSXRender'// 

const list = [1, 2, 3,]
const list2 = [1, 2, 3,].map((v) => v * 2)

// v-slots 传递的是 v-slots={插槽键值对组件对象} 子组件slots接收显示的是 键值函数

// 当 对象插槽 v-slots指令插槽 一起使用 只会传递 默认插槽 和 指令插槽
// 当 指令插槽 默认插槽 与 具名插槽 一起使用 否则只会传递 默认插槽
// 即 默认插槽不能和对象插槽一起使用会覆盖对象插槽内容

export default defineComponent({
  setup(props, ctx) {
    console.log(' defineComponent StoreCom   ,   ： ', props, ctx, style, style2, )
    
    const hotNum = ref(6)
    const changeHotNum = () => {
      console.log(' changeHotNum   ,   ： ', hotNum.value,  )
      hotNum.value +=  1
    }
    
    const visible = ref(true)
    const toggleVisible = () => {
      console.log(' toggleVisible   ,   ： ', visible.value,  )
      visible.value = !visible.value
    }

    const store = useStore()
    console.log(' StoreCom setup ： ', props, ctx, store, ); //
    const name = store.state.name
    const handleClick = () => {
      console.log(' handleClick   ,   ： ',   )
      store.dispatch('changeStoreAction', {data: 'great'})
      store.commit('changeStore', {data: 'great'})
    }
    
    const propsData = ref([
      '父组件数据', 1, 2, 3,
    ])
    const changeProps = () => {
      console.log(' changeProps   ,   ： ', propsData,  )
      propsData.value[0] = 888
      propsData.value = [
        666,
        888,
      ]
    }

    const slots = useSlots()
    const Slot = ctx.slots.d1 ? <div>动态插槽1：{ctx.slots.d1({data: list})}</div> : <div>动态插槽2：{ctx.slots.d2({data: list2})}</div>

    const slotsCom = {
      vSlot: () => <div>父组件传递 vSlot</div>,
      vSlotFoo: () => <div>父组件传递 vSlotFoo</div>,
      // bar: () => [<div>插槽内容3</div>],
    }

    const objSlotCom = {
      objSlot: () => <div>对象插槽objSlot</div>,
      objFoo: () => [<div>对象插槽objFoo</div>],
    }
    return () => <div class={`Store ${style.Store}`}>
      
      <button onClick={() => changeHotNum()}>changeHotNum {hotNum.value}</button>

      {/* <div>defineComponent</div>
      <h5 onClick={() => handleClick('22')}>Store: {{ store }} --  {{ name }}</h5>
      <div>名字： {props.name}</div>

      <div>default： {ctx.slots.default({defaultData: list})}</div>
      <div>header： {ctx.slots.header({headerData: list, extra: 'good', })}</div>
      <div>main： {ctx.slots.main({mainData: list, extra: 'good', })}</div>
      <div>footer： {ctx.slots.footer({footerData: list})}</div>
      <div>empty {ctx.slots.empty?.({footerData: list})}</div>

      {ctx.slots.d1 ? <div>动态插槽1：{ctx.slots.d1({data: list})}</div> : <div>动态插槽2：{ctx.slots.d2({data: list2})}</div>}
      {Slot} */}
      
      <div>ctx.slots：{ctx.slots}</div>
      <div>slots 钩子显示插槽: {slots.default()}</div>
      <div>{() => "jsx语法哦"}</div>

      <button onClick={toggleVisible}>toggleVisible {visible.value ? '11' : '22'}</button>
      <div v-show={visible.value}>指令</div>

      <hr/>
      {/* <JSXSon
        com={<h4>{propsData.value.map((v, i) => <span key={i}>{v}</span>)} 父组件Com属性组件</h4>}
        Comp={<h5>父组件Comp属性组件</h5>}
        v-slots={slotsCom}
        propsData={propsData}
        changeProps={changeProps}
        extra={'extra'}
      >
        {objSlotCom}
        <div>父组件传递的默认插槽1</div>
        <div>父组件传递的默认插槽2</div>
      </JSXSon> */}
      
      {/* <DefineSon
        com={<h4>{propsData} 父组件Com属性组件</h4>}
        Comp={<h5>父组件Comp属性组件</h5>}
        v-slots={slotsCom}
        propsData={propsData}
        changeProps={changeProps}
        extra={'extra'}
      >
        {objSlotCom}
        <div>父组件传递的默认插槽1</div>
        <div>父组件传递的默认插槽2</div>
      </DefineSon> */}

      {/* <JSXRender
        com={<h4>{propsData} 父组件Com属性组件</h4>}
        Comp={<h5>父组件Comp属性组件</h5>}
        v-slots={slotsCom}
        propsData={propsData}
        changeProps={changeProps}
        extra={'extra'}
      >
        {objSlotCom}
        <div>父组件传递的默认插槽1</div>
        <div>父组件传递的默认插槽2</div>
      </JSXRender> */}
      
    </div>
  },
})