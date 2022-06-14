const { exec } = require('child_process');
const path = require('path');

const microScripts = {
    genWasm: (path) =>
        `emcc ${path} -O3 -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall','cwrap']" -s EXPORTED_FUNCTIONS=['_malloc'] -s WASM=1 -s SIDE_MODULE=2 -o ${path.replace('cpp', 'wasm')}`,
};

console.log('Started generating wasm files...');

exec(microScripts.genWasm(path.resolve(__dirname, '../src/utils/avgImageData/avgImageData.cpp'), 'avgImageData.wasm'), (error, stdout, stderr) => {
    if (error) {
        console.error(`err: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`std err: ${stderr}`);
        return;
    }
    console.log(stdout);
});