import { babel } from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json'

const input = './src/index.ts'
const name = 'ReactDraggableGrid'
const external = ['react']
const babelConfig = {
  babelHelpers: 'runtime',
  extensions: ['.js', '.jsx', '.ts', '.tsx']
}
const tsConfig = {
  tsconfig: './tsconfig.json',
  noEmit: false,
  declaration: true,
  declarationDir: '.'
}

export default [
  {
    input,
    output: {
      name,
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    external,
    plugins: [
      typescript(tsConfig),
      babel(babelConfig)
    ]
  },
  {
    input,
    output: {
      name,
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    },
    external,
    plugins: [
      typescript(tsConfig),
      babel(babelConfig)
    ]
  }
]
