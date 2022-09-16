
import { defineComponent, defineProps, } from 'vue'
import { useSlots, useAttrs } from 'vue'


const JSXRender = {
  data() {
    return { visible: true };
  },
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
  render(props, ctx) {
    const slots = useSlots()
    console.log(' JSXRender defineComponent StoreCom   ,   ： ', props, ctx, ctx.slots, this, slots, )
    const {Comp,  } = props// 
    return <div >
      <div>JSXRender</div>

      <div>JSXRender def {this.def}</div>

      {/* 可以显示 */}
      <div>JSXRender com {this.com}</div>
      <div>JSXRender Comp <Comp></Comp></div>

      {/* 在props声明过的都不会出现在 ctx.attrs 里 只会出现在 props 里 */}
      <div>JSXRender this.$attrs.com {this.$attrs.com}</div>
      <div>JSXRender this.$attrs.Comp {this.$attrs.Comp}</div>

      <div>JSXRender this.$slots {this.$slots}</div>
      <div>JSXRender this.$slots.slotsCom {this.$slots.slotsCom?.()}</div>

      <div>JSXRender this.$slots.objSlot {this.$slots.objSlot?.()}</div>
      <div>JSXRender this.$slots.objFoo {this.$slots.objFoo?.()}</div>
      <div>JSXRender this.$slots.default {this.$slots.default?.()}</div>
      <div>JSXRender this.$slots.vSlot {this.$slots.vSlot?.()}</div>
      <div>JSXRender this.$slots.vSlotFoo {this.$slots.vSlotFoo?.()}</div>
      <div>JSXRender slots.default {slots.default?.()}</div>
      <div>JSXRender slots.vSlot {slots.vSlot?.()}</div>
      <div>JSXRender slots.vSlotFoo {slots.vSlotFoo?.()}</div>

      <hr/>
      {props.propsData.value.map((v, i) => <div key={i}>{v}</div>)}
      <button onClick={props.changeProps}>changeProps</button>
    </div>
  }
}

export default JSXRender