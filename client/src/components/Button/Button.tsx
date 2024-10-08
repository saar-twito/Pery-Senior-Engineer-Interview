import React from 'react'
import style from './Button.module.css'

interface ButtonProps {
  type: "submit" | "button";
  content: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ type = "submit", content, icon, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={style.button}>{content} {icon}</button>

  )
}

export default Button