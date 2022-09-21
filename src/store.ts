import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

let settingsStore = (set: any) => ({
  dark: false,
  toggleDarkMode: () => set((state: any) => ({ dark: !state.dark })),
});

let peopleStore = (set: any) => ({
  people: ['John Doe', 'Jane Doe'],
  addPerson: (person: any) =>
    set((state: any) => ({ people: [...state.people, person] })),
});

// @ts-ignore
settingsStore = devtools(settingsStore);
// @ts-ignore
settingsStore = persist(settingsStore, { name: 'user_settings' });

// @ts-ignore
peopleStore = devtools(peopleStore);

export const useSettingsStore = create(settingsStore);
export const usePeopleStore = create(peopleStore);
