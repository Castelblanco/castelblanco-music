import { useEffect, useState } from 'react';
import { Button, Card, Text } from 'react-native-paper';

import { useAuthRequest } from 'expo-auth-session/providers/google';
import { View } from 'react-native';
import { GOOGLE_CLIENT_ID } from '@constants/env';
import { jwtDecode } from '@tools/jwt';
import { ProfileDOM } from '@models/users/entities';
import { UserDAL } from '@storages/google/youtube/models';
import { useProfileStore } from '@storages/zustand/profile';
import { getPlayList } from '@storages/google/youtube/implementation';
import { ApiError } from '@common/responses/errors/api-error';

export default function YoutubeView() {
    const [_, response, promptAsync] = useAuthRequest({
        androidClientId: GOOGLE_CLIENT_ID,
        scopes: ['https://www.googleapis.com/auth/youtube.readonly'],
    });

    const { setProfile, profile, clearProfile } = useProfileStore();

    const [isPlay, setIsPlay] = useState(true);

    useEffect(() => setSessionToken(), [response]);

    const handleLoginGoogle = async () => await promptAsync();

    const setSessionToken = () => {
        if (!response) return;
        if (response.type !== 'success') return;
        if (!response.authentication) return;

        const data = jwtDecode<UserDAL>(response.authentication.idToken!);
        setProfile(
            new ProfileDOM({
                ...data,
                accessToken: response.authentication.accessToken,
                refreshToken: response.authentication.refreshToken!,
            })
        );
    };

    const setTokenAccess = async () => {
        if (!response) return;
        if (response.type !== 'success') return;
        if (!response.authentication) return;

        const result = await response.authentication.refreshAsync(
            {
                clientId: GOOGLE_CLIENT_ID,
            },
            {}
        );

        setProfile({
            ...profile,
            accessToken: result.accessToken,
            refreshToken: result.refreshToken!,
        });
    };

    const handleGetPlayList = async () => {
        try {
            await getPlayList(profile.accessToken);
        } catch (e) {
            console.log({ e });

            clearProfile();
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <Card
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 0,
                }}
            >
                {!profile.accessToken && (
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Button mode="contained" onPress={handleLoginGoogle}>
                            <Text>Login with Google</Text>
                        </Button>
                    </View>
                )}

                {profile.accessToken && (
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Button mode="contained" onPress={handleGetPlayList}>
                            <Text>list</Text>
                        </Button>
                    </View>
                )}
            </Card>
        </View>
    );
}
