import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { structureClone } from '@helpers/structure-clone';
import { INITIAL_STATE_PROFILE, TProfileDOM } from '@models/users/entities';

type TProfileStore = {
    profile: TProfileDOM;
    setProfile: (profile: TProfileDOM) => void;
    clearProfile: () => void;
};

export const useProfileStore = create(
    persist<TProfileStore>(
        (set) => ({
            profile: structureClone(INITIAL_STATE_PROFILE),
            setProfile(profile) {
                set({ profile });
            },
            clearProfile() {
                set({ profile: structureClone(INITIAL_STATE_PROFILE) });
            },
        }),
        {
            name: 'castel-music-profile',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
