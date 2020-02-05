class ArrayOfFilteredProviders extends Array<React.ComponentType> {
  public addProvider<C>(
    variable: C,
    providerCreator: (variable: NonNullable<C>) => React.ComponentType,
  ) {
    if (variable) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.push(providerCreator(variable as any))
    }

    return this
  }
}

export default (): ArrayOfFilteredProviders => new ArrayOfFilteredProviders()
