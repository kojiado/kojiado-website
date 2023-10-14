import React from 'react'

interface ButtonProps {
  label: string;
  type: string;
  additionalClass?: string;
  icon?: string | JSX.Element;
  onClick?: () => void;
  dataText?: string;
}

const Button: React.FC<ButtonProps> = ({label,type,icon,additionalClass,onClick}) => {
  return (
    <button data-text={label} onClick={onClick} className={`button ${type} ${additionalClass}`}>
      {label}
      {icon && (
        <span
          dangerouslySetInnerHTML={{ __html: icon }}
          style={{ display: 'inline-block', verticalAlign: 'middle' }}
        />
      )}
    </button>
  )
}

export default Button