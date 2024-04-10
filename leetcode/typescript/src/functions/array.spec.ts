import { newArrayBuffer } from "./array";

test("Should create a buffer array according to the number i've passed", () => {
   const a = new ArrayBuffer(6);

   console.log(a);

   const a8 = new Uint8Array(a);

   a8[0] = 45000

   a8[4] = 45
   
});

