import * as SecureStore from 'expo-secure-store'

export const ACCESS_TOKEN_KEY = 'my_app_api_access_token'

/**
 * 设置 token
 */
export const setToken = async (value: string) => {
  return await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, value)
}

/**
 * 获取 token
 */
export const getToken = async () => {
  const value = await SecureStore.getItemAsync(ACCESS_TOKEN_KEY)

  return value ?? ''
}

/**
 * 删除 token
 */
export const removeToken = async () => {
  return SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY)
}
