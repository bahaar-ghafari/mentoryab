import { Tabs as MUITabs } from '@mui/material';

type TabsProps = {
  value: string | number;
  onChange: () => void;
};

const Tabs = ({ value, onChange }: TabsProps) => {
  return <MUITabs value={value} onChange={onChange} />;
};

export default Tabs;
