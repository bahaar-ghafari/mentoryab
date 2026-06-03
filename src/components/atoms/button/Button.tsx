import { Button as MUIButton } from '@mui/material';

const Button = ({ title }: { title: string }) => {
  return <MUIButton variant="contained">{title}</MUIButton>;
};

export default Button;
