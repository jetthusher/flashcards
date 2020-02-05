export type ImportHelper<T> = { [K in keyof T]: T[K] }

export type ExtractPropertiesTypes<T> = T[keyof T]

export type OmitId<T> = Omit<T, "id">
