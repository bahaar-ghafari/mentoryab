//TODO: tab switcher component

import { Tab as MUITab } from '@mui/material';

type TabProps = {
  value: 'mentee' | 'mentor';
  label: string;
};

const Tab = ({ value, label }: TabProps) => {
  return <MUITab value={value} label={label} />;
};

export default Tab;
