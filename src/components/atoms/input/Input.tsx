'use client'

import React from 'react'
import { cn } from '@/utils/cn'
import { InputProps } from '@/components/atoms/input/Input.types'

const Input: React.FC<InputProps> = ({
  placeholder = '',
  type = 'text',
  value,
  onChange,
  className = '',
  icon,
  disabled = false
}) => {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-secondary-text)] pointer-events-none">
          {icon}
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          `w-full px-4 py-2 rounded-lg text-sm transition
           bg-[var(--color-surface-main)]
           text-[var(--color-primary-text)]
           border border-[var(--color-surface-dark)]
           focus:outline-none
           focus:ring-2 focus:ring-[var(--color-primary-main)]
           focus:border-[var(--color-primary-main)]
           disabled:bg-[var(--color-surface-dark)]
           disabled:text-[var(--color-secondary-text)]
           disabled:cursor-not-allowed`,
          icon ? 'pl-10' : '',
          className
        )}
      />
    </div>
  )
}

export default Input
