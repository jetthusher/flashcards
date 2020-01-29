export default <R>(action: () => R, times: number): R[] =>
  Array(times)
    .fill(null)
    .map(action)
