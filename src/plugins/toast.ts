import { Toast } from 'native-base'
import type { ReactNode } from 'react'

type IToastExtraProp = Parameters<typeof Toast.show>[0]

const toast = (title: ReactNode, extra: IToastExtraProp = {}) => {
  return Toast.show({
    title,
    ...extra,
  })
}

export default toast
