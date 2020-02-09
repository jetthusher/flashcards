import repeat from "../repeat"

export default async <R>(action: () => R, times: number) =>
  new Promise<R[]>((resolve, reject) => {
    try {
      const result = repeat(action, times)
      resolve(result)
    } catch (e) {
      reject(e)
    }
  })
