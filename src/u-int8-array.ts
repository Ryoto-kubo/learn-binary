export function mainUInt8Array() {
  // Uint8Arrayの作成
  const uint8Array = new Uint8Array([
    0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64,
  ]);
  uint8Array[1] = 0x6f; // Uint8Arrayの要素を変更

  // TextDecoderでUint8Arrayを文字列に変換
  const decoder = new TextDecoder("utf-8");
  const decodedString = decoder.decode(uint8Array);

  console.log(decodedString); // 出力: "Hello, world"
}
