import { create } from 'zustand';

interface StoreState {
  darkMode: boolean;
  language: 'tr' | 'en';
  toggleDarkMode: () => void;
  setLanguage: (lang: 'tr' | 'en') => void;
}

export const useStore = create<StoreState>((set) => ({
  darkMode: true, // Set default to true for dark mode
  language: 'tr',
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  setLanguage: (lang) => set({ language: lang }),
}));