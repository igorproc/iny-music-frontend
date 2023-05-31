import { DeepRequiredNonNullable, TGqlResult, } from '~/types/gql'

export type TSong = DeepRequiredNonNullable<TGqlResult<'getAlbumDataQuery'>['getAlbumByShareToken']['songs'][0]>
export type TSongQueue = {
  playlistId: number,
  songs: DeepRequiredNonNullable<TGqlResult<'getAlbumDataQuery'>['getAlbumByShareToken']['songs']>[0]
}