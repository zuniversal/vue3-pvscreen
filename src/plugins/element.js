import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'

export default (app) => {
  app.use(ElementPlus, { 
    locale: 'en' ? en : zhCn
  })
}
