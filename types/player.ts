import { DeepRequiredNonNullable, TGqlResult } from '~/types/gql'

export type TSong = DeepRequiredNonNullable<TGqlResult<'getAlbumDataQuery'>['getAlbumByShareToken']['songs'][0]>
