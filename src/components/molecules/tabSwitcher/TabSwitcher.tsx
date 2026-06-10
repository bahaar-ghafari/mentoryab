import React from 'react';
import Tabs from '../../atoms/tabs/Tabs';
import Tab from '../../atoms/tab/Tab';
import type { TabKey } from '../heroContent/HeroContent';

type TabSwitcherProps = {
  value: TabKey;
  onChange: (event: React.SyntheticEvent, newValue: TabKey) => void;
};

const TabSwitcher = ({ value, onChange }: TabSwitcherProps) => {
  return (
    <Tabs value={value} onChange={(e, v) => onChange(e, v as TabKey)}>
      <Tab value="mentee" label="Mentee" />
      <Tab value="mentor" label="Mentor" />
    </Tabs>
  );
};

export default TabSwitcher;
