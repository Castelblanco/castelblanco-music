import { useEffect, useState } from 'react';
import * as MediaLibrary from 'expo-media-library';

export const useGetAudioAssets = () => {
    const [mediaAccess, setMediaAccess] = useState(false);

    useEffect(() => void requestAccess(), []);

    const requestAccess = async () => {
        const { granted } = await MediaLibrary.requestPermissionsAsync();
        setMediaAccess(granted);
    };

    return {
        mediaAccess,
    };
};
