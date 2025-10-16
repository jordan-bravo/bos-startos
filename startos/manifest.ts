import { setupManifest } from '@start9labs/start-sdk'
import { SDKImageInputSpec } from '@start9labs/start-sdk/base/lib/types/ManifestTypes'

const BUILD = process.env.BUILD || ''

const architectures =
  BUILD === 'x86_64' || BUILD === 'aarch64' ? [BUILD] : ['x86_64', 'aarch64']

export const manifest = setupManifest({
  id: 'balanceofsatoshis',
  title: 'Balance of Satoshis',
  license: 'MIT',
  wrapperRepo: 'https://github.com/jordan-bravo/bos-startos',
  upstreamRepo: 'https://github.com/alexbosworth/balanceofsatoshis',
  supportSite: 'https://github.com/alexbosworth/balanceofsatoshis/issues',
  marketingSite: 'https://github.com/alexbosworth',
  donationUrl:
    'https://yalls.org/hashcash/7bff5e4f-4534-4cca-8daa-3d5a3c239919',
  docsUrl:
    'https://github.com/alexbosworth/balanceofsatoshis/blob/master/README.md',
  description: {
    short: 'A Tool for working with the balance of your satoshis on LND',
    long: 'A command line tool for working with the balance of your satoshis on your self-hosted Lightning Network Daemon, using the command line for working with LND balances. You can open balanced channels with other participants, and manually monitor your channel fees and HTLCs',
  },
  volumes: ['main'],
  images: {
    balanceofsatoshis: {
      source: { dockerBuild: { dockerfile: 'Dockerfile', workdir: './' } },
      arch: architectures,
    } as SDKImageInputSpec,
  },
  hardwareRequirements: {
    arch: architectures,
  },
  alerts: {
    install:
      'READ CAREFULLY! This is command-line ONLY tool. You will be required to use an SSH Key to gain access to the command line. Please refer to the Using SSH guide (https://start9.com/latest/user-manual/ssh) for setup instructions.',
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {
    lnd: {
      description: 'Needed to communicate with the Lightning Network',
      optional: false,
      s9pk: 'https://github.com/Start9Labs/lnd-startos/releases/download/v0.19.3-beta.1-beta.0/lnd.s9pk',
    },
  },
})
