import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type SiteState = {
  // jwt token
  accessToken: string
  // 是否已登录
  isSignedIn: boolean
}

const initialState: SiteState = {
  accessToken: '',
  isSignedIn: false,
}

export const siteSlice = createSlice({
  name: 'site',
  initialState,
  // 普通同步操作
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload
    },
    setIsSignedIn(state, action: PayloadAction<boolean>) {
      state.isSignedIn = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAccessToken, setIsSignedIn } = siteSlice.actions

export default siteSlice.reducer
