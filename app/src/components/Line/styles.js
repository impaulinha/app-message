import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '90%'
    },
    line: {
        color: theme.colors.azulbackground,
        fontFamily: theme.fonts.mon_bold,
        fontSize: 25
    }
});