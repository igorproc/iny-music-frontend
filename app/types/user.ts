import type { DeepRequiredNonNullable, TGqlResult, TGqlVariables } from '~/types/gql'

export type TClientIdCreate = {
  input: TGqlVariables<'createClientId'>
  response: TGqlResult<'createClientId'>
}

export type TUserData = TGqlResult<'getUserById'>['getUserByUid']
export type TUserLogin = {
  payload: TGqlVariables<'loginUser'>['loginData']
  response: TGqlResult<'loginUser'>
}
