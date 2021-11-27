import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import { zip } from 'zip-a-folder';


export default [

    // dist file

    {
        input: 'src/index.js',

        plugins : [
            nodeResolve(),
            postcss(),
        ],

        output: [
            {
                file: 'dist/mouse.js',
                format: 'umd',
                name : 'Mouse'
            },
            {
                file: 'dist/mouse-min.js',
                format: 'umd',
                name : 'Mouse',
                plugins : [
                    terser()
                ]
            }
        ],
    },

    // entry import
    {
        input: 'src/entry.js',

        output: [
            {
                file: 'entry.js',
                format: 'cjs',
            },
        ],

        plugins : [
            nodeResolve(),
            postcss(),
        ],
    },

    // template 
    {
        input : 'demo/index.js',

        output : {
            file : 'template.js'
        },

        plugins : [
            postcss(),
            terser(),
            htmlTemplate({
                template: 'demo/index.html',
                target: 'index.html',
            }),
        ],
    }
];

// run zip func
class TestMe {

    static async main() {
        await zip('dist/', 'mouse-js.zip');
    }
}
TestMe.main();