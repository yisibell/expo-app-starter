import Constants from 'expo-constants'
import type { IEnvConfig } from '@src/types/envConfig'

type IUseConstants = () => IEnvConfig

/**
 * 获取项目环境变量
 */
const useConstants: IUseConstants = () => {
  const extra = Constants?.manifest2?.extra ?? Constants?.manifest?.extra ?? {}

  return extra as IEnvConfig
}

export default useConstants
