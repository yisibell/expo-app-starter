import React, { useEffect, useCallback } from 'react'
import { Center, Heading, Button, Text } from 'native-base'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import type {
  HomeScreenProps,
  HomeScreenNavigationProp,
} from '@src/navigation/navigator.interface'

import getConstants from '@src/plugins/getConstants'
import { $api } from '@src/api'
import toast from '@src/plugins/toast'

export default function Home(_props: HomeScreenProps) {
  const navigation = useNavigation<HomeScreenNavigationProp>()

  const handlePress = () => {
    navigation.push('ColorModeDemo')
  }

  const env = getConstants()

  useEffect(() => {
    console.log('env', env)
  }, [env])

  const testApiRepo = async () => {
    const res = await $api.user.login({
      username: 'DHSZ',
      password: '123456',
    })

    console.log('api repo test: ', res)
  }

  useFocusEffect(
    useCallback(() => {
      testApiRepo()
    }, [])
  )

  return (
    <>
      <Center>
        <Heading my={3}>Home</Heading>
        <Text my={3}>ENV: {JSON.stringify(env)}</Text>
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
