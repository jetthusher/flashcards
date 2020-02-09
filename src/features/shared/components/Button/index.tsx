import React, { ButtonHTMLAttributes } from "react"

const Button: React.FC<ButtonHTMLAttributes<HTMLElement>> = ({
  children,
  onClick,
}) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
)

export default Button
