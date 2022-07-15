import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import counterReducer from './features/counter/reducer'
import siteReducer, { SiteState } from './features/site/reducer'

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
  key: 'expoApp',
  storage: AsyncStorage,
}

export function makeStore() {
  return configureStore({
    reducer: {
      // 使该模块数据持久化
      site: persistReducer<SiteState>(persistConfig, siteReducer),
      counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export const useAppDispatch: () => AppDispatch = useDispatch

export default store
