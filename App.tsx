import React from 'react'
import { NativeBaseProvider, extendTheme } from 'native-base'

import ColorModeDemo from '@src/pages/color-mode-demo'

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark', // light, dark
}

// extend the theme
export const theme = extendTheme({ config })

type MyThemeType = typeof theme

declare module 'native-base' {
  interface ICustomTheme extends MyThemeType {}
}

export default function App() {
  return (
    <NativeBaseProvider>
      <ColorModeDemo />
    </NativeBaseProvider>
  )
}
