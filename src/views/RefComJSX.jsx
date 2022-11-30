import { ref } from 'vue'

const count = ref(0)

export default function Counter() {
  const com = <div>count: {count.value}</div>
  const data = ref(8)
  const childFn = () => {
    console.log(' childFn   ,   ： ', data  )
    
  }
  return (
    <div className='RefComJSX'>
      RefComJSX
    </div>
  )
}
