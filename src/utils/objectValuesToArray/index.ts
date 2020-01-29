export default <T>(obj: { [key: string]: T }) =>
  Object.entries(obj).map(keyAndValue => keyAndValue[1])
