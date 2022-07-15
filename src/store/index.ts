import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import counterReducer from './features/counter/reducer'
import siteReducer from './features/site/reducer'

export function makeStore() {
  return configureStore({
    reducer: {
      // 使该模块数据持久化
      site: siteReducer,
      counter: counterReducer,
    },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export const useAppDispatch: () => AppDispatch = useDispatch

export default store
