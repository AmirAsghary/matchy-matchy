import wasmModule from './avgImageData.wasm';

const instance = wasmModule({ ...imports });

function avgImageData() {
    return instance.exports.avgImageData();
}

export default avgImageData;
