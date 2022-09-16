
import { useStore,  } from 'vuex'// 

const StoreCom = (props, ctx) => {
  console.log(' StoreCom   ,   ： ', props, ctx )
  const store = useStore()
  console.log(' StoreCom setup ： ', props, ctx, store, ); //
  const name = store.state.name
  const handleClick = () => {
    console.log(' handleClick   ,   ： ',   )
    store.dispatch('changeStoreAction', {data: 'great'})
    store.commit('changeStore', {data: 'great'})
  }
  return <div class="Store">
    <h5 onClick={() => handleClick('22')}>Store: {{ store }} --  {{ name }}</h5>
    <div>{props.name}</div>
  </div>
}

export default StoreCom // 