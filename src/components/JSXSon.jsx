
import { defineComponent, defineProps, } from 'vue'
import { useSlots, useAttrs } from 'vue'

// 无需声明 props 即可接收到
const JSXSon = (props, ctx) => {
  const props2 = defineProps({
    com: {
      type: Object,
    },
    Comp: {
      type: Function,
    },
    def: {
      type: Function,
      default: 'props定义的默认组件哦',
    },
    propsData: {
      type: Object,
    },
    changeProps: {
      type: Object,
    },
  })
  const slots = useSlots()
  console.log(' JSXSon defineComponent StoreCom   ,   ： ', props, ctx, ctx.slots, slots, props2, )
  const {Comp,  } = props// 

  return <div >
    <h3>JSXSon</h3>

    {/* 不显示 */}
    {{
      zyb: () => <div>对象插槽zyb</div>,
      foo: () => [<div>对象插槽foo</div>],
    }}

    <div>JSXSon def {props.def}</div>

    <div>JSXSon com {props.com}</div>
    <div>JSXSon Comp <Comp></Comp></div>

    <div>JSXSon ctx.attrs.com {ctx.attrs.com}</div>
    <div>JSXSon ctx.attrs.Comp {ctx.attrs.Comp}</div>

    <div>JSXSon ctx.slots {ctx.slots}</div>
    <div>JSXSon ctx.slots.slotsCom {ctx.slots.slotsCom?.()}</div>
    
    <div>JSXSon ctx.slots.objSlot {ctx.slots.objSlot?.()}</div>
    <div>JSXSon ctx.slots.objFoo {ctx.slots.objFoo?.()}</div>
    <div>JSXSon ctx.slots.default {ctx.slots.default?.()}</div>
    <div>JSXSon ctx.slots.vSlot {ctx.slots.vSlot?.()}</div>
    <div>JSXSon ctx.slots.vSlotFoo {ctx.slots.vSlotFoo?.()}</div>
    <div>JSXSon slots.default {slots.default?.()}</div>
    <div>JSXSon slots.vSlot {slots.vSlot?.()}</div>
    <div>JSXSon slots.vSlotFoo {slots.vSlotFoo?.()}</div>

    <hr/>
    {props.propsData.value.map((v, i) => <div key={i}>{v}</div>)}
    <button onClick={props.changeProps}>changeProps</button>
  </div>
}

export default JSXSon