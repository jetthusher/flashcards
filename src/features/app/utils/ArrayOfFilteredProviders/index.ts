export default class ArrayOfFilteredProviders extends Array<
  React.ComponentType
> {
  public addProvider<C>(
    variableOrCondition: C,
    providerCreator: (
      variableOrConditionResult: NonNullable<C>,
    ) => React.ComponentType,
  ) {
    if (variableOrCondition) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.push(providerCreator(variableOrCondition as any))
    }

    return this
  }
}
