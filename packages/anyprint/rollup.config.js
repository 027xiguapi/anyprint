import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js',
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [typescript()],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.es5.js',
      format: 'umd',
      name: 'anyPrint',
      sourcemap: true,
    },
    plugins: [
      typescript({ target: 'es5' }),
    ],
  },
];

