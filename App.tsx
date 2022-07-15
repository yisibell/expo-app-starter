import React from 'react'
import { NativeBaseProvider, extendTheme } from 'native-base'

// Store
import { Provider as StoreProvider } from 'react-redux'
import store from '@src/store'
import persistor, { PersistorGate } from '@src/store/persistor'

// Navigation
import Navigator from '@src/navigation/navigator'

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'light', // light, dark
}

// extend the theme
export const theme = extendTheme({ config })

type MyThemeType = typeof theme

declare module 'native-base' {
  interface ICustomTheme extends MyThemeType {}
}

export default function App() {
  return (
    <StoreProvider store={store}>
      <PersistorGate persistor={persistor}>
        <NativeBaseProvider theme={theme}>
          <Navigator />
        </NativeBaseProvider>
      </PersistorGate>
    </StoreProvider>
  )
}
