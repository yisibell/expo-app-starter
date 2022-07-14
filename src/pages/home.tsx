import React from 'react'
import { Center, Heading, Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import type {
  HomeScreenProps,
  HomeScreenNavigationProp,
} from '@src/navigation/navigator.interface'

export default function Home(_props: HomeScreenProps) {
  const navigation = useNavigation<HomeScreenNavigationProp>()

  const handlePress = () => {
    navigation.navigate('ColorModeDemo')
  }

  return (
    <>
      <Center>
        <Heading my={3}>Home</Heading>
        <Button onPress={handlePress}> Go to Color Mode Demo</Button>
      </Center>
    </>
  )
}
