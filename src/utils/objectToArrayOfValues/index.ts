export default <T>(obj: { [key: string]: T }): T[] => Object.values(obj)
