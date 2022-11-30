import { ref, defineComponent, } from 'vue'

const count = ref(0)

export default defineComponent({
  setup(props, ctx) {
    return () => {
      const com = <div>count: {count.value}</div>
      const data = ref(666)
      const childFn = () => {
        console.log(' childFn   ,   ： ', data  )
        
      }
      ctx.expose({
        data,
        childFn,
      })
      return (
        <div className='RefComJSX'>
          RefComJSX
        </div>
      )
    }
  }
});

