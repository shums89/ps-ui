import { create } from 'zustand';
import { GAMES_DATA, type TGame } from './data/games.data';

interface IStore {
  activeGameSlug: string;
  setActiveGameSlug: (slug: string) => void;
  getActiveGame: () => TGame | undefined;
}

export const UseGameStore = create<IStore>((set) => ({
  activeGameSlug: 'final-fantasy-xii-remake',
  setActiveGameSlug: (slug: string) => set({ activeGameSlug: slug }),
  getActiveGame: (): TGame | undefined => {
    const state = UseGameStore.getState();
    const game = GAMES_DATA.find((g) => g.slug === state.activeGameSlug);
    return game;
  },
}));
