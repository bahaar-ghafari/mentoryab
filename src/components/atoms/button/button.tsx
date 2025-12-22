import { IButtonProps } from './interface';
import { buttonClassNameGenerator } from './theme';

const Button = ({
  size = 'sm',
  radius = 'md',
  children,
  ...props
}: IButtonProps) => {
  return (
    <button
      {...props}
      className={`${buttonClassNameGenerator({ size: size, radius: radius, variant: 'light', color: 'secondary' })}`}
    >
      {children}
    </button>
  );
};

export default Button;
