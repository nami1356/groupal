import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import config from './config'

const Firebase = {
  // eslint-disable-next-line
  install (Vue, options) {
    const firebaseApp = firebase.initializeApp(config)
    const settings = {timestampsInSnapshots: true}
    firebaseApp.firestore().settings(settings)

    // instance propertyの登録
    Vue.prototype.$firestore = firebaseApp.firestore()
    Vue.prototype.$auth = firebaseApp.auth()
    Vue.prototype.$storage = firebaseApp.storage()
  }
}

export default Firebase
