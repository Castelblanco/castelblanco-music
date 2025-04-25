import { MD3DarkTheme } from 'react-native-paper';
import { COLORS } from './color';

export const theme = {
    ...MD3DarkTheme,
    colors: {
        ...MD3DarkTheme.colors,
        primary: COLORS.PRIMERY,
        secondary: COLORS.SECONDARY,
        background: COLORS.BACKGROUND,
        surface: COLORS.SURFACE,
        text: COLORS.TEXT,
        onSurface: COLORS.ON_SURFACE,
        disabled: COLORS.DISABLED,
        placeholder: COLORS.PLACEHOLDER,
        outline: COLORS.OUTLINE,
    },
};
