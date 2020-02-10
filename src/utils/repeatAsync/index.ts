import repeat from "../repeat"

export default async <R>(action: () => R, times: number) =>
  repeat(action, times)
