import fs from 'fs-extra'
import { resolve } from 'path'

;(async () => {
  // clean lib
  await fs.emptyDir(resolve(__dirname, '../lib'))
})()
