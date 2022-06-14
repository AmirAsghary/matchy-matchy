// Source: https://stackoverflow.com/a/41878939

type WasmModuleInstance = any;
type Pointer = any;

const nByte = 4;

/**
 * Takes an Int32Array, copies it to the heap and returns a pointer
 *
 * @param WasmModule
 * @param arr
 */
export function intArrToPointer(WasmModule: WasmModuleInstance, arr: number[]): Pointer {
    const ptr = WasmModule._malloc(arr.length * nByte)
    WasmModule.HEAP32.set(arr, ptr / nByte)
    return ptr
}

/**
 * Takes a pointer and  array length, and returns a Int32Array from the heap
 *
 * @param WasmModule
 * @param pointer
 * @param length
 */
export function ptrToArray(WasmModule: WasmModuleInstance, pointer: Pointer, length: number) {
    const array = new Int32Array(length)
    const pos = pointer / nByte
    array.set(WasmModule.HEAP32.subarray(pos, pos + length))
    return array
}