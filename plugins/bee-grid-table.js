import Vue from 'vue'
import BeeGridTable from 'beegridtable'

import 'beegridtable/dist/styles/beegridtable.css'
//@ts-ignore
import BeeLocale from 'beegridtable/src/locale'

Vue.use(BeeGridTable, {
  locale: BeeLocale,
  capture: true,
})
