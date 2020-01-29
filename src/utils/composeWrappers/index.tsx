import React from "react"
import wrapAround from "../wrapAround"

export default (wrappers: React.ComponentType[]) => {
  let ComposedWrappers: React.FC = ({ children }) => <>{children}</>

  wrappers.forEach(Wrapper => {
    ComposedWrappers = wrapAround(ComposedWrappers, Wrapper)
  })

  return ComposedWrappers
}
