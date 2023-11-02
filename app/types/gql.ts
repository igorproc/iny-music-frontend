import type { GqlSdkFuncs } from '#gql'

export type TGqlResult<T extends keyof GqlSdkFuncs> = Awaited<ReturnType<GqlSdkFuncs[T]>>
export type TGqlVariables<T extends keyof GqlSdkFuncs> = Parameters<GqlSdkFuncs[T]>[0]
export type DeepRequiredNonNullable<T> = T extends null | undefined
  ? never
  : T extends (infer ElementType)[]
  ? DeepRequiredNonNullable<ElementType>[]
  : T extends Record<string | number, any>
  ? { [key in keyof T]-?: DeepRequiredNonNullable<T[key]> }
  : T
