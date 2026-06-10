import { Tabs as MUITabs } from '@mui/material';

type TabsProps = {
  value: string | number;
  onChange: (event: React.SyntheticEvent, newValue: string | number) => void;
  children: React.ReactNode;
  ariaLabel?: string;
};

const Tabs = ({ value, onChange, children, ariaLabel }: TabsProps) => {
  return (
    <MUITabs
      value={value}
      onChange={onChange}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label={ariaLabel}
    >
      {children}
    </MUITabs>
  );
};

export default Tabs;
