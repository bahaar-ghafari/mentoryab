import React from 'react';

export type InputProps = {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
};
