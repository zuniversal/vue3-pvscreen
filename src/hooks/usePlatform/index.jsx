import { ref, onMounted, } from 'vue';
import debounce from 'lodash/debounce';

const resize = debounce(() => {
  console.log('useEffect resize debounce ： ');
  window.location.reload();
}, 500);

const usePlatform = (config = {}) => {
  const {
    mobileCb = () => {},
  } = config;

  const isMobile = ref('');
  const setIsMobile = (val) => {
    isMobile.value = val
  };

  const isMobileListener = (cb) => {
    let userAgent = navigator.userAgent.toLowerCase();
    console.log(' isMobile isMobileListener ： ', userAgent,   )// 
    // if (
    //   /ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(
    //     userAgent,
    //   )
    // ) {
    //   console.log('前端是移动端');
    //   setIsMobile('mobile');
    //   mobileCb()
    // } else {
    //   console.log('前端是pc端');
    //   setIsMobile('');
    // }
    setIsMobile('');
  }

  isMobileListener()
  
  onMounted(() => {
    console.log(' isMobile onMountedonMounted ： ',    )// 
    window.addEventListener('resize', isMobileListener);
    return () => {
      console.log(' isMobile useEffect 卸载 ： ');
      window.removeEventListener('resize', isMobileListener);
    };
  });

  return {
    isMobile,
    // setIsMobile,
  };
};

export default usePlatform;
