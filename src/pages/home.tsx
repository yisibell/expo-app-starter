import React, { useEffect } from 'react'
import { Center, Heading, Button, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import type {
  HomeScreenProps,
  HomeScreenNavigationProp,
} from '@src/navigation/navigator.interface'

import useConstants from '@src/hooks/helper/useConstants'

export default function Home(_props: HomeScreenProps) {
  const navigation = useNavigation<HomeScreenNavigationProp>()

  const handlePress = () => {
    navigation.navigate('ColorModeDemo')
  }

  const env = useConstants()

  useEffect(() => {
    console.log('env', env)
  }, [env])

  return (
    <>
      <Center>
        <Heading my={3}>Home</Heading>
        <Text my={3}>ENV: {JSON.stringify(env)}</Text>
        <Button onPress={handlePress}> Go to Color Mode Demo</Button>
      </Center>
    </>
  )
}
