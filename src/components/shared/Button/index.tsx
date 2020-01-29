import React, { ButtonHTMLAttributes } from "react"

interface Props extends ButtonHTMLAttributes<HTMLElement> {
  children: string
}

const Button: React.FC<Props> = ({ children, onClick }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
)

export default Button
