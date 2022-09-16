
import { useStore,  } from 'vuex'// 

const HocCom = (config) => {
  console.log(' HocCom   config,   ： ', config  )
  
  const HocComSon = (props, ctx) => {
    console.log(' HocComSon   ,   ： ', props, ctx )
    const store = useStore()
    console.log(' HocComSon setup ： ', props, ctx, store, ); //
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
  const NoHocComSon = (props, ctx) => {
    console.log(' NoHocComSon   ,   ： ', props, ctx )
    return <div class="">
      {props.isTrue ? <div>aaa</div> : <div>bbb</div>}
    </div>
  }
  return config.isHoc ? HocComSon : NoHocComSon
}

export default HocCom // 