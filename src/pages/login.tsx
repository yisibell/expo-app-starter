import React, { useState } from 'react'
import {
  Box,
  FormControl,
  Input,
  WarningOutlineIcon,
  Button,
} from 'native-base'
import { $api } from '@src/api'
import { useAppDispatch } from '@src/store'
import { setIsSignedIn, setAccessToken } from '@src/store/features/site/reducer'
import toast from '@src/plugins/toast'

const Login = () => {
  const dispatch = useAppDispatch()

  const [invalid, setInvalid] = useState(false)

  const [username, setUsername] = useState('')
  const handleUsernameChange = (val: string) => setUsername(val)

  const [password, setPassword] = useState('')
  const handlePasswordChange = (val: string) => setPassword(val)

  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setInvalid(false)
    if (!username.trim() || !password.trim()) {
      setInvalid(true)
      return
    }

    const params = {
      username,
      password,
    }

    try {
      setLoading(true)
      const { code, data } = await $api.user.login(params)

      if (code === 0) {
        dispatch(setAccessToken(data.accessToken))
        dispatch(setIsSignedIn(true))
      } else {
        toast('用户名或密码不正确!')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box py={5} alignItems="center">
      <FormControl isInvalid={invalid} w="75%" maxW="300px">
        <FormControl.Label>用 户</FormControl.Label>
        <Input
          value={username}
          placeholder="请输入用户名称"
          onChangeText={handleUsernameChange}
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          请输入用户名称
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl isInvalid={invalid} w="75%" maxW="300px">
        <FormControl.Label>密 码</FormControl.Label>
        <Input
          value={password}
          placeholder="请输入登录密码"
          onChangeText={handlePasswordChange}
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          请输入登录密码
        </FormControl.ErrorMessage>
      </FormControl>

      <Button
        isLoading={loading}
        isLoadingText="登录中"
        my={5}
        width="75%"
        onPress={handleSubmit}
      >
        登 录
      </Button>
    </Box>
  )
}

export default Login
