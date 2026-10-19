import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export function Button({ label, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button className={`button button-${variant}`} type="button" {...props}>
      {label}
    </button>
  );
}
