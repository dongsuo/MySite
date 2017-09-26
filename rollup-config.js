import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';
import { minify } from 'uglify-es'
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';


export default {
  entry: 'src/main-aot.js',
  dest: 'aot/build.js', // output a single application bundle
  sourceMap: true,
  sourceMapFile: 'aot/dist/build.js.map',
  format: 'iife',
  onwarn: function(warning) {
    // Skip certain warnings

    // should intercept ... but doesn't in some rollup versions
    if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }

    // console.warn everything else
    console.warn( warning.message );
  },
  plugins: [
      globals(),
      builtins(),
      nodeResolve({jsnext: true, module: true}),
      commonjs({


        include: 'node_modules/**',

        exclude:[
                // 'node_modules/rxjs/util/root.js',
                // 'node_modules/socket.io-parser/**',
                // 'node_modules/engine.io-parser/**',
                // 'node_modules/engine.io-client/**',
                'node_modules/socket.io-client/**',
              ]
      }),
      // uglify()
  ]
};
