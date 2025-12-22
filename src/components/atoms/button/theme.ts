import { colorVariants } from '@/styles/varients';
import { tv } from 'tailwind-variants';

export const buttonClassNameGenerator = tv({
  base: [
    'z-0',
    'group',
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'box-border',
    'appearance-none',
    'outline-solid outline-transparent',
    'select-none',
    'whitespace-nowrap',
    'min-w-max',
    'font-normal',
    'subpixel-antialiased',
    'overflow-hidden',
    'tap-highlight-transparent',
    'transform-gpu data-[pressed=true]:scale-[0.97]',
    'cursor-pointer',
    'transition-all',
  ],
  variants: {
    variant: {
      solid: '',
      bordered: 'border-medium bg-transparent',
      light: 'bg-transparent',
      flat: '',
      faded: 'border-medium',
      shadow: '',
      ghost: 'border-medium bg-transparent',
    },
    size: {
      sm: 'px-3 min-w-16 h-8 text-tiny gap-2 rounded-sm',
      md: 'px-4 min-w-20 h-10 text-sm gap-2 rounded-md',
      lg: 'px-6 min-w-24 h-12 text-md gap-3 rounded-lg',
    },
    color: {
      default: '',
      primary: '',
      secondary: '',
      success: '',
      warning: '',
      danger: '',
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
    fullWidth: {
      true: 'w-full',
    },
    isDisabled: {
      true: 'opacity-50 pointer-events-none',
    },
    isIconOnly: {
      true: 'px-0 !gap-0',
      false: '[&>svg]:max-w-[theme(spacing.8)]',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'solid',
    color: 'default',
    fullWidth: false,
    isDisabled: false,
  },
  compoundVariants: [
    // solid / color
    {
      variant: 'solid',
      color: 'default',
      class: colorVariants.solid.default,
    },
    {
      variant: 'solid',
      color: 'primary',
      class: colorVariants.solid.primary,
    },
    {
      variant: 'solid',
      color: 'secondary',
      class: colorVariants.solid.secondary,
    },
    {
      variant: 'solid',
      color: 'success',
      class: colorVariants.solid.success,
    },
    {
      variant: 'solid',
      color: 'warning',
      class: colorVariants.solid.warning,
    },
    {
      variant: 'solid',
      color: 'danger',
      class: colorVariants.solid.danger,
    },
    //   // shadow / color
    {
      variant: 'shadow',
      color: 'default',
      class: colorVariants.shadow.default,
    },
    {
      variant: 'shadow',
      color: 'primary',
      class: colorVariants.shadow.primary,
    },
    {
      variant: 'shadow',
      color: 'secondary',
      class: colorVariants.shadow.secondary,
    },
    {
      variant: 'shadow',
      color: 'success',
      class: colorVariants.shadow.success,
    },
    {
      variant: 'shadow',
      color: 'warning',
      class: colorVariants.shadow.warning,
    },
    {
      variant: 'shadow',
      color: 'danger',
      class: colorVariants.shadow.danger,
    },
    // bordered / color
    {
      variant: 'bordered',
      color: 'default',
      class: colorVariants.bordered.default,
    },
    {
      variant: 'bordered',
      color: 'primary',
      class: colorVariants.bordered.primary,
    },
    {
      variant: 'bordered',
      color: 'secondary',
      class: colorVariants.bordered.secondary,
    },
    {
      variant: 'bordered',
      color: 'success',
      class: colorVariants.bordered.success,
    },
    {
      variant: 'bordered',
      color: 'warning',
      class: colorVariants.bordered.warning,
    },
    {
      variant: 'bordered',
      color: 'danger',
      class: colorVariants.bordered.danger,
    },
    //   // flat / color
    {
      variant: 'flat',
      color: 'default',
      class: colorVariants.flat.default,
    },
    {
      variant: 'flat',
      color: 'primary',
      class: colorVariants.flat.primary,
    },
    {
      variant: 'flat',
      color: 'secondary',
      class: colorVariants.flat.secondary,
    },
    {
      variant: 'flat',
      color: 'success',
      class: colorVariants.flat.success,
    },
    {
      variant: 'flat',
      color: 'warning',
      class: colorVariants.flat.warning,
    },
    {
      variant: 'flat',
      color: 'danger',
      class: colorVariants.flat.danger,
    },
    // faded / color
    {
      variant: 'faded',
      color: 'default',
      class: colorVariants.faded.default,
    },
    {
      variant: 'faded',
      color: 'primary',
      class: colorVariants.faded.primary,
    },
    {
      variant: 'faded',
      color: 'secondary',
      class: colorVariants.faded.secondary,
    },
    {
      variant: 'faded',
      color: 'success',
      class: colorVariants.faded.success,
    },
    {
      variant: 'faded',
      color: 'warning',
      class: colorVariants.faded.warning,
    },
    {
      variant: 'faded',
      color: 'danger',
      class: colorVariants.faded.danger,
    },
    // light / color
    {
      variant: 'light',
      color: 'default',
      class: [colorVariants.light.default, 'hover:bg-default/40'],
    },
    {
      variant: 'light',
      color: 'primary',
      class: [colorVariants.light.primary, 'hover:bg-primary/20'],
    },
    {
      variant: 'light',
      color: 'secondary',
      class: [colorVariants.light.secondary, 'hover:bg-secondary/20'],
    },
    {
      variant: 'light',
      color: 'success',
      class: [colorVariants.light.success, 'hover:bg-success/20'],
    },
    {
      variant: 'light',
      color: 'warning',
      class: [colorVariants.light.warning, 'hover:bg-warning/20'],
    },
    {
      variant: 'light',
      color: 'danger',
      class: [colorVariants.light.danger, 'hover:bg-danger/20'],
    },
    // ghost / color
    {
      variant: 'ghost',
      color: 'default',
      class: [colorVariants.ghost.default, 'hover:!bg-default'],
    },
    {
      variant: 'ghost',
      color: 'primary',
      class: [
        colorVariants.ghost.primary,
        'hover:!bg-primary hover:!text-primary-foreground',
      ],
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: [
        colorVariants.ghost.secondary,
        'hover:!bg-secondary hover:!text-secondary-foreground',
      ],
    },
    {
      variant: 'ghost',
      color: 'success',
      class: [
        colorVariants.ghost.success,
        'hover:!bg-success hover:!text-success-foreground',
      ],
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: [
        colorVariants.ghost.warning,
        'hover:!bg-warning hover:!text-warning-foreground',
      ],
    },
    {
      variant: 'ghost',
      color: 'danger',
      class: [
        colorVariants.ghost.danger,
        'hover:!bg-danger hover:!text-danger-foreground',
      ],
    },
  ],
});
