'use client';

import React from 'react';
import { cn } from '@/utils/cn';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export const Input: React.FC<InputProps> = ({
  error,
  className = '',
  ...rest
}) => {
  return <input {...rest} className={cn(className, error && 'error')} />;
};
