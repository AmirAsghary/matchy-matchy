import wasmModule from './avgImageData.wasm';

const instance = wasmModule({ ...imports });

function avgImageData(imageData) {
    return instance.exports.avgImageData(imageData);
}

export default avgImageData;
