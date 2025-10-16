import { VersionGraph } from '@start9labs/start-sdk'
import { current, other } from './versions'
import { credentialsJson } from '../fileModels/credentials.json'

export const versionGraph = VersionGraph.of({
  current,
  other,
  preInstall: async (effects) => {
    await credentialsJson.write(effects, {
      cert_path: '/mnt/lnd/tls.cert',
      macaroon_path: '/mnt/lnd/admin.macaroon',
      socket: 'lnd.startos:10009',
    })
  },
})
