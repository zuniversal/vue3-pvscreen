import { onMounted, defineComponent, ref, } from 'vue';
import styles from './index.module.less';

const MapTools = (props) => { 
  const rightsRef = ref('');
  onMounted(() => {
    console.log(' onMountedonMounted ： ',    )// 
    const box = document.querySelector('.amap-controls');
    const rights = document.querySelector('.amap-controlbar').style.right;
    const {isNormal, scale} = props;
    console.log(' MapTools ： ', box, right  )// 
    if (!box) {
      return null
    }
    const right = isNormal ? 920 : 720
    rightsRef.value = rights
  })

  // return <div className={'box'}  >box</div>
  // return <div className={styles.box} style={{right: `${100 + 20}px`}} >
  //   <div className={styles.btnScale} onClick={props.handleScale}></div>
  //   <div className={styles.btnLocation} onClick={props.handleLocation}></div>
  // </div> 
  return <teleport to=".amap-controls">
    {/* <div className={styles.box} style={{right: `${rights.split('px')[0] * 1 + 20}px`}}> */}
    {/* <div className={styles.box} style={{right: `${rightsRef.value.split('px')[0] * 1 + 20}px`}} > */}
    <div className={styles.box} style={{right: `${100 + 20}px`}} >
      <div className={styles.btnScale} onClick={props.handleScale}></div>
      <div className={styles.btnLocation} onClick={props.handleLocation}></div>
    </div>
  </teleport>
}

export default MapTools
