import { IconMusic } from '@atoms/icons/music';
import { IconYouTube } from '@atoms/icons/youtube';
import { COLORS } from '@constants/color';
import { theme } from '@constants/theme';
import { Tabs } from 'expo-router';
import { Provider } from 'react-native-paper';

export default function MainLayout() {
    return (
        <Provider theme={theme}>
            <Tabs
                screenOptions={{
                    tabBarInactiveTintColor: COLORS.DISABLED,
                    tabBarStyle: {
                        backgroundColor: COLORS.SURFACE,
                        borderTopWidth: 0,
                    },
                    tabBarActiveTintColor: COLORS.PRIMERY,
                    tabBarShowLabel: true,
                    headerShown: false,
                    tabBarItemStyle: {
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderLeftWidth: 2,
                    },
                    tabBarLabelPosition: 'beside-icon',
                    tabBarLabel: () => <></>,
                }}
            >
                <Tabs.Screen
                    name="local-music"
                    options={{
                        title: 'Local',
                        tabBarIcon: (props) => <IconMusic {...props} />,
                    }}
                />
                <Tabs.Screen
                    name="youtube"
                    options={{
                        title: 'YouTube',
                        tabBarIcon: (props) => <IconYouTube {...props} />,
                    }}
                />
            </Tabs>
        </Provider>
    );
}
