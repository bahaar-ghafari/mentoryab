import React from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '../../atoms/tabs/Tabs';

type TabSwitcherProps = {
  value: 'mentee' | 'mentor';
  onChange: (event: React.SyntheticEvent, newValue: string | number) => void;
};

const TabSwitcher = ({ value, onChange }: TabSwitcherProps) => {
  return (
    <Tabs value={value} onChange={onChange}>
      <Tab value="mentee" label="Mentee" />
      <Tab value="mentor" label="Mentor" />
    </Tabs>
  );
};

export default TabSwitcher;
