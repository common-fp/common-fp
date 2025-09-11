import makePlugin from './make-plugin'
import { createUnplugin } from 'unplugin'

const unplugin = createUnplugin(makePlugin)

export default unplugin
/*
  nextjs required const rather than named exports.  I don't understand
  the difference but don't want something to break so I'll
  follow blindly.
*/
/* eslint-disable import-x/group-exports*/
export const vitePlugin = unplugin.vite
export const rollupPlugin = unplugin.rollup
export const rolldownPlugin = unplugin.rolldown
export const webpackPlugin = unplugin.webpack
export const rspackPlugin = unplugin.rspack
export const esbuildPlugin = unplugin.esbuild
export const farmPlugin = unplugin.farm
