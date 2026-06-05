import { Tabs as MUITabs } from '@mui/material';

type TabsProps = {
  value: string | number;
  onChange: (event: React.SyntheticEvent, newValue: string | number) => void;
  children: React.ReactNode;
};

const Tabs = ({ value, onChange, children }: TabsProps) => {
  return (
    <MUITabs
      value={value}
      onChange={onChange}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="mentee mentor tabs"
    >
      {children}
    </MUITabs>
  );
};

export default Tabs;
