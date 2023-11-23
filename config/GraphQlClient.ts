import type { ModuleOptions } from 'nuxt-graphql-client'

export const GraphQlClient: ModuleOptions = {
  watch: true,
  documentPaths: ['./api'],
  functionPrefix: 'Gql',
  codegen: {
    skipTypename: true,
    useTypeImports: true,
    dedupeFragments: true,
    disableOnBuild: false,
  },
  clients: {
    default: {
      host: process.env.GRAPHQL_ENDPOINT || '',
      headers: {
        'Apollo-Require-Preflight': 'true',
      },
      corsOptions: {
        mode: 'cors',
        credentials: 'include',
      },
      schema: '../schema.gql',
    },
  },
}
