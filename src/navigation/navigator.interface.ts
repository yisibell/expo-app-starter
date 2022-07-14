import type { NativeStackScreenProps } from '@react-navigation/native-stack'

// 各页面路由参数
export type RootStackParamList = {
  Home: undefined
  ColorModeDemo: undefined
}

// 首页
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type HomeScreenNavigationProp = HomeScreenProps['navigation']
export type HomeScreenRouteProp = HomeScreenProps['route']
