// import { Buffer } from "buffer";

export function mainBuffer() {
  const buffer = Buffer.from("Hello, World!");
  buffer.write("o", 1);
  console.log(buffer.toString()); // "Hollo, World!"
}
