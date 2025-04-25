import { COLORS } from '@constants/color';
import { StyleSheet } from 'react-native';

export const stylesLocalMusic = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        width: '100%',
        height: '100%',
        borderRadius: 0,
    },
    headerBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        elevation: 5,
        backgroundColor: COLORS.SURFACE,
    },
    headerTxt: {
        fontSize: 30,
    },
    boxMusicSelect: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        position: 'fixed',
        bottom: 0,
        borderTopWidth: 0.4,
        borderTopColor: COLORS.PRIMERY,
    },
    boxMusicSelectName: {
        width: 180,
        padding: 10,
    },
    boxMusicSelectControl: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
});
