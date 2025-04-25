import { getPlayList } from '@storages/google/youtube/implementation';
import { useEffect } from 'react';
import { Button, Card, Text } from 'react-native-paper';

import { useAuthRequest } from 'expo-auth-session/providers/google';
import { View } from 'react-native';

export default function YoutubeView() {
    const [request, response, promptAsync] = useAuthRequest({
        androidClientId: '',
    });

    useEffect(() => {
        // getPlayList();
    }, []);

    const handleLoginGoogle = async () => {
        try {
            const result = await promptAsync();
            console.log({ result });
        } catch (e) {
            console.log({ e });
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
                <Button mode="contained">
                    <Text>Login with Google</Text>
                </Button>
                <Text>Youtube</Text>
                <Text>Youtube</Text>
            </Card>
        </View>
    );
}
