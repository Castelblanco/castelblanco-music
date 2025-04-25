import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TMusicDOM } from '@models/music/entities';

type TMusicStore = {
    music: TMusicDOM[];
    setMusic: (music: TMusicDOM[]) => void;
};

export const useMusicStore = create(
    persist<TMusicStore>(
        (set) => ({
            music: [],
            setMusic(music) {
                set({ music });
            },
        }),
        {
            name: 'castel-music-list',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
