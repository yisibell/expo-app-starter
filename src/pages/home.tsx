import React, { useEffect } from 'react'
import { Center, Heading, Button, Text } from 'native-base'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import type {
  HomeScreenProps,
  HomeScreenNavigationProp,
} from '@src/navigation/navigator.interface'

import getConstants from '@src/plugins/getConstants'
import { $api } from '@src/api'
import toast from '@src/plugins/toast'

import { useAppSelector } from '@src/store'

export default function Home(_props: HomeScreenProps) {
  // 路由功能
  const navigation = useNavigation<HomeScreenNavigationProp>()
  const handlePress = () => {
    navigation.push('ColorModeDemo')
  }

  // 环境变量
  const env = getConstants()
  useEffect(() => {
    console.log('env', env)
  }, [env])

  // 测试状态管理
  const accessToken = useAppSelector((state) => state.site.accessToken)

  // 测试接口
  const testApiRepo = async () => {
    const res = await $api.user.info()

    console.log('api repo test: ', res)
  }

  useFocusEffect(() => {
    testApiRepo()
  })

  return (
    <>
      <Center px={3}>
        <Heading my={3}>Home</Heading>
        <Text my={3}>ENV: {JSON.stringify(env)}</Text>
        <Text my={3}>Token: {accessToken}</Text>
        <Button my={3} onPress={handlePress}>
          Go to Color Mode Demo
        </Button>
        <Button onPress={() => toast('Hello Toast!')} colorScheme="secondary">
          Toast
        </Button>
      </Center>
    </>
  )
}
