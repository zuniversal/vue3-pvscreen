
import { defineComponent, defineProps, } from 'vue'
import { useSlots, useAttrs } from 'vue'

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
})

export default defineComponent({
  props: {
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
  },
  // props: props2,// 无效
  setup(props, ctx) {
    const slots = useSlots()
    const {Comp,  } = props// 
    console.log(' DefineSon defineComponent StoreCom   ,   ： ', props, ctx, ctx.slots, props2, slots, )

    return () => <div >
      <div>DefineSon</div>

      <div>DefineSon def {props.def}</div>

      <div>DefineSon com {props.com}</div>
      <div>DefineSon Comp <Comp></Comp></div>

      {/* 在props声明过的都不会出现在 ctx.attrs 里 只会出现在 props 里 */}
      <div>DefineSon ctx.attrs.com {ctx.attrs.com}</div>
      <div>DefineSon ctx.attrs.Comp {ctx.attrs.Comp}</div>

      <div>DefineSon ctx.slots {ctx.slots}</div>
      <div>DefineSon ctx.slots.slotsCom {ctx.slots.slotsCom?.()}</div>

      <div>DefineSon ctx.slots.objSlot {ctx.slots.objSlot?.()}</div>
      <div>DefineSon ctx.slots.objFoo {ctx.slots.objFoo?.()}</div>
      <div>DefineSon ctx.slots.default {ctx.slots.default?.()}</div>
      <div>DefineSon ctx.slots.vSlot {ctx.slots.vSlot?.()}</div>
      <div>DefineSon ctx.slots.vSlotFoo {ctx.slots.vSlotFoo?.()}</div>
      <div>DefineSon slots.default {slots.default?.()}</div>
      <div>DefineSon slots.vSlot {slots.vSlot?.()}</div>
      <div>DefineSon slots.vSlotFoo {slots.vSlotFoo?.()}</div>

      <hr/>
      {props.propsData.value.map((v, i) => <div key={i}>{v}</div>)}
      <button onClick={props.changeProps}>changeProps</button>
    </div>
  },
})