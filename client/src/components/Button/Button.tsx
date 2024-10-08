import React from 'react'
import style from './Button.module.css'

interface ButtonProps {
  type: "submit" | "button";
  content: string;
  icon: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ type = "submit", content, icon, onClick, disabled }: ButtonProps) => {
  return (
    <button
      style={disabled ? { opacity: 0.5, cursor: 'progress' } : {}}  // Adjust style when disabled
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={style.button}
    >
      {content} {icon}
    </button>

  )
}

export default Button