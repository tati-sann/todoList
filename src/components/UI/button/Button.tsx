import React from 'react';
import '../styles/button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button = ({children, ...props}: ButtonProps) => {
  return (
    <button
      className={'button'}
      type={'button'}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;