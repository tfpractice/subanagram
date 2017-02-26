import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import nodeResolve from 'rollup-plugin-node-resolve';
import progress from 'rollup-plugin-progress';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import visualizer from 'rollup-plugin-visualizer';

export default {
  entry: 'src/index.js',
  targets: [
      { dest: 'dist/bundle.cjs.js', format: 'cjs', },
      { dest: 'dist/bundle.umd.js', format: 'umd', },
  ],
  moduleId: 'anagramica',
  moduleName: 'anagramica',
  sourceMap: true,
  exports: 'named',
  plugins: [
    nodeResolve({ skip: [ 'anagramica', ], }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      plugins:  [ 'external-helpers', ],
    }),
    progress({ clearLine: false, }),
    filesize(),
    visualizer({ filename: 'stats.html', }),
    replace({ ENV: JSON.stringify(process.env.NODE_ENV || 'development'), }),
    (process.env.NODE_ENV === 'production' && uglify({ beautify: true, })),
  ],
};
