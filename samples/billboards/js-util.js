export const range = function*(from, to) {
  for (let i = from; i <= to; i++) {
    yield i;
  }
};
