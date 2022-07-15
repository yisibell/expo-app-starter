import { persistStore } from 'redux-persist'
import store from '@src/store'
import { PersistGate } from 'redux-persist/integration/react'

// =_=
export const PersistorGate = PersistGate as any

const persistor = persistStore(store)

export default persistor
