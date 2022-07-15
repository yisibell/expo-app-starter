import user, { IUserApiModuleInstance } from './modules/user'
import { IRequestInstance } from '@src/types/apiRepository'
import requestInstance from '@src/plugins/fetch'

/**
 * api 仓库
 */
export interface IApiRepository {
  user: IUserApiModuleInstance
}

export interface IApiRepositoryFactory {
  (fn: IRequestInstance): IApiRepository
}

export let $api: IApiRepository

export const apiRepo: IApiRepositoryFactory = (request) => {
  $api = {
    user: user(request),
  }

  return $api
}

apiRepo(requestInstance)
