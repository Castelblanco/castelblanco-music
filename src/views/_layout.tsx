import { theme } from '@constants/theme';
import { Stack } from 'expo-router';
import { Provider } from 'react-native-paper';

export default function MainLayout() {
    return (
        <Provider theme={theme}>
            <Stack initialRouteName="index">
                <Stack.Screen name="tabs" options={{ headerShown: false }} />
                <Stack.Screen name="index" options={{ headerShown: false }} />
            </Stack>
        </Provider>
    );
}
