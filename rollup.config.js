import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import {uglify} from 'rollup-plugin-uglify'
import image from '@rollup/plugin-image';
import { wasm } from '@rollup/plugin-wasm';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'cjs'
    },
    plugins: [
        resolve(),
        wasm({
            sync: ['./src/utils/avgImageData/avgImageData.wasm']
        }),
        image(),
        typescript({ tsconfig: './tsconfig.json' }),
        babel({ babelHelpers: 'bundled' }),
        process.env.NODE_ENV === 'production' && uglify(),
    ]
};