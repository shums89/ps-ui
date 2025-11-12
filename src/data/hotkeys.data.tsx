import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react';

export const hotkeysData = [
  {
    icon: <ArrowUp />,
    label: 'TOP MENU',
  },
  {
    icon: <ArrowDown />,
    label: 'DETAILS',
  },
  {
    icon: <ArrowLeft />,
    label: 'PREV GAME',
  },
  {
    icon: <ArrowRight />,
    label: 'NEXT GAME',
  },
];

export type THotkeyKey = (typeof hotkeysData)[number];
