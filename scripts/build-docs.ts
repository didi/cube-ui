import fs from 'fs-extra'
import { resolve } from 'path'

;(async () => {
  // clean docs
  await fs.emptyDir(resolve(__dirname, '../docs'))
  // copy document file
  await fs.move(resolve(__dirname, '../document/dist'), resolve(__dirname, '../docs/'), { overwrite: true })
  // copy example file
  await fs.move(resolve(__dirname, '../example/dist'), resolve(__dirname, '../docs/example/'), { overwrite: true })
})()
