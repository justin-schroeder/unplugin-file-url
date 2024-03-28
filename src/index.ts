import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { relative } from 'pathe'
import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { Options } from './types'

const resolverPrefix = '\0__file_url__'

export const unpluginFactory: UnpluginFactory<Options | undefined> = () => ({
  name: 'unplugin-file-url',
  resolveId(id) {
    if (id.startsWith('file://')) {
      return `${resolverPrefix}${id}`
    }
    return undefined
  },
  async load(id) {
    if (id.startsWith(resolverPrefix)) {
      const path = fileURLToPath(id.slice(resolverPrefix.length))
      return await readFile(path, 'utf-8')
    }
  },
})

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
