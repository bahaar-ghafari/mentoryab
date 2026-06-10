import React, { useState } from 'react';
import HeroContent from '../../molecules/heroContent/HeroContent';
import type {
  TabKey,
  HeroContentProps,
} from '../../molecules/heroContent/HeroContent';
import Button from '@mui/material/Button';
import Input from '@/components/atoms/input/Input';

// TODO: replace placeholders with real actionSlot components (SearchBar, ApplyButton, etc.)
const contentMap: Record<
  TabKey,
  Omit<HeroContentProps, 'tab' | 'onTabChange'>
> = {
  mentee: {
    header: 'Find your mentor',
    description:
      'Connect with experienced professionals who guide you toward your goals.',
    actionSlot: (
      <div>
        <Input placeholder="Search for a mentor" />
      </div>
    ),
  },
  mentor: {
    header: 'Share your expertise',
    description:
      'Help the next generation grow by offering your time and knowledge.',
    actionSlot: (
      <div>
        <Button>Apply</Button>
      </div>
    ),
  },
};

const MentoringHero = () => {
  const [tab, setTab] = useState<TabKey>('mentee');

  return (
    <section>
      {/* TODO: AvatarGrid background */}
      <HeroContent
        tab={tab}
        onTabChange={(_, newValue) => setTab(newValue)}
        {...contentMap[tab]}
      />
    </section>
  );
};

export default MentoringHero;
