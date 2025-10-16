import { matches, FileHelper } from '@start9labs/start-sdk'

const { object, literal } = matches

const shape = object({
  cert_path: literal('/mnt/lnd/tls.cert').onMismatch('/mnt/lnd/tls.cert'),
  macaroon_path: literal('/mnt/lnd/admin.macaroon').onMismatch(
    '/mnt/lnd/admin.macaroon',
  ),
  socket: literal('lnd.startos:10009').onMismatch('lnd.startos:10009'),
})

export const credentialsJson = FileHelper.json(
  {
    volumeId: 'main',
    subpath: '/.bos/embassy/credentials.json',
  },
  shape,
)
