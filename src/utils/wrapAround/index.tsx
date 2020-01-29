import React from "react"

export default (
  Wrapper: React.ComponentType,
  Target: React.ComponentType,
): React.FC => ({ children }) => (
  <Wrapper>
    <Target>{children}</Target>
  </Wrapper>
)
