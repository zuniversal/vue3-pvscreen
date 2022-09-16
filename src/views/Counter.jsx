import { ref } from 'vue'

const count = ref(0)

export default function Counter() {
  const com = <div>count: {count.value}</div>
  
  return (
    <>
      {com}
      <button
        onClick={() => {
          console.log(' count.value ： ', count.value   )// 
          count.value++
        }}
      >
        add
      </button>
    </>
  )
}
