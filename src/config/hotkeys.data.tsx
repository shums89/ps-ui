import { ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

export const hotkeysData = [
  {
    icon: <div className='text-base font-medium mt-0.5'>1</div>,
    label: 'TOP MENU',
    hotkey: 1,
  },
  {
    icon: (
      <>
        <ArrowDown />
      </>
    ),
    label: 'DETAILS',
    hotkey: ArrowDown,
  },
  {
    icon: (
      <>
        <ArrowLeft />
      </>
    ),
    label: 'PREV GAME',
    hotkey: ArrowLeft,
  },
  {
    icon: (
      <>
        <ArrowRight />
      </>
    ),
    label: 'NEXT GAME',
    hotkey: ArrowRight,
  },
];

export type THotkeyKey = typeof hotkeysData[number]
