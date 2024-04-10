export const newArrayBuffer = (arrayBufferSize: number) => {
    return new ArrayBuffer(arrayBufferSize);
}

export const newBuffer = (arrayBufferSize: number) => {
    const a8 = new Uint8Array(arrayBufferSize);
}