/* @ts-expect-error - we are importing a generated mjs */
import { effect } from '../test/mocks/importer.mjs'

document.getElementById('app')!.innerHTML = effect()
