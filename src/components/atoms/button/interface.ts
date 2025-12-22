import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type SizeVarient = 'sm' | 'md' | 'lg';
export type RadiusVarient = 'none' | 'sm' | 'md' | 'lg' | 'full';
export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: SizeVarient;
  radius?: RadiusVarient;
}
