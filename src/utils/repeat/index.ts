export default <R>(fn: () => R, times: number): R[] =>
  Array(times)
    .fill(null)
    .map(fn)
