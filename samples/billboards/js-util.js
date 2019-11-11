export const range = function*(from, to) {
  for (let i = from; i <= to; i++) {
    yield i;
  }
};

export const byteColorToFloat = function(byte) {
  if (Array.isArray(byte)) {
    return byte.map(v => v/255);
  }
  return byte / 255;
}
