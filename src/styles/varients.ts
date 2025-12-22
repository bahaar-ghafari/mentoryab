const solid = {
  default: 'bg-default text-default-foreground',
  primary: 'bg-primary text-primary-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
  success: 'bg-success text-success-foreground',
  warning: 'bg-warning text-warning-foreground',
  danger: 'bg-danger text-danger-foreground',
};

const shadow = {
  default: 'shadow-lg shadow-default/50 bg-default text-default-foreground',
  primary: 'shadow-lg shadow-primary/40 bg-primary text-primary-foreground',
  secondary:
    'shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground',
  success: 'shadow-lg shadow-success/40 bg-success text-success-foreground',
  warning: 'shadow-lg shadow-warning/40 bg-warning text-warning-foreground',
  danger: 'shadow-lg shadow-danger/40 bg-danger text-danger-foreground',
};

const bordered = {
  default: 'bg-transparent border-default text-foreground border-2',
  primary: 'bg-transparent border-primary text-primary border-2',
  secondary: 'bg-transparent border-secondary text-secondary border-2',
  success: 'bg-transparent border-success text-success border-2',
  warning: 'bg-transparent border-warning text-warning border-2',
  danger: 'bg-transparent border-danger text-danger border-2',
  foreground: 'bg-transparent border-foreground text-foreground border-2',
};

const flat = {
  default: 'bg-default/40 text-default-700',
  primary: 'bg-primary/20 text-primary-600',
  secondary: 'bg-secondary/20 text-secondary-600',
  success: 'bg-success/20 text-success-700 dark:text-success',
  warning: 'bg-warning/20 text-warning-700 dark:text-warning',
  danger: 'bg-danger/20 text-danger-600 dark:text-danger-500',
  foreground: 'bg-foreground/10 text-foreground',
};

const faded = {
  default: 'border-default bg-default-100 text-default-foreground border-2',
  primary: 'border-default bg-default-100 text-primary border-2',
  secondary: 'border-default bg-default-100 text-secondary border-2',
  success: 'border-default bg-default-100 text-success border-2',
  warning: 'border-default bg-default-100 text-warning border-2',
  danger: 'border-default bg-default-100 text-danger border-2',
  foreground: 'border-default bg-default-100 text-foreground border-2',
};

const light = {
  default: 'bg-transparent text-default-foreground',
  primary: 'bg-transparent text-primary',
  secondary: 'bg-transparent text-secondary',
  success: 'bg-transparent text-success',
  warning: 'bg-transparent text-warning',
  danger: 'bg-transparent text-danger',
  foreground: 'bg-transparent text-foreground',
};

const ghost = {
  default: 'border-default text-default-foreground border-2',
  primary: 'border-primary text-primary border-2',
  secondary: 'border-secondary text-secondary border-2',
  success: 'border-success text-success border-2',
  warning: 'border-warning text-warning border-2',
  danger: 'border-danger text-danger border-2',
  foreground: 'border-foreground text-foreground hover:!bg-foreground border-2',
};

export const colorVariants = {
  solid,
  shadow,
  bordered,
  flat,
  faded,
  ghost,
  light,
};
