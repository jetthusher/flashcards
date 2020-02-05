import React from "react"
import wrapAround from "../../../../utils/wrapAround"

export default (providers: React.ComponentType[]) => {
  let ComposedProviders: React.FC = ({ children }) => <>{children}</>

  providers.forEach(Provider => {
    ComposedProviders = wrapAround(ComposedProviders, Provider)
  })

  return ComposedProviders
}
