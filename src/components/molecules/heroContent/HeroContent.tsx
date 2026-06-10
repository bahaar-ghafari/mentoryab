import React from 'react';
import TabSwitcher from '../tabSwitcher/TabSwitcher';

export type TabKey = 'mentee' | 'mentor';

export type HeroContentProps = {
  tab: TabKey;
  onTabChange: (event: React.SyntheticEvent, newValue: TabKey) => void;
  header: string;
  description: string;
  actionSlot: React.ReactNode;
};

const HeroContent = ({
  tab,
  onTabChange,
  header,
  description,
  actionSlot,
}: HeroContentProps) => {
  return (
    <div>
      <TabSwitcher value={tab} onChange={onTabChange} />
      <h1>{header}</h1>
      <p>{description}</p>
      {actionSlot}
    </div>
  );
};

export default HeroContent;
