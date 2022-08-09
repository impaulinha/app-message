import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.azulbackground,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35
    },
    viewMessage:{
        backgroundColor: theme.colors.azul,
        width: '100%',
        height: '60%',
        borderRadius: 15,
        padding: 10,
        alignItems: 'center'
    },
    title:{
        fontFamily: theme.fonts.mon_bold,
        color: theme.colors.azulpiscina,
        textTransform: 'uppercase',
        fontSize: 12,
        letterSpacing: 4,
        marginTop: 15
    },
    viewTextMessage: {
        marginTop: 25,
        height: '65%',
        width: '90%',
        justifyContent: 'center'
    },
    message: {
        fontFamily: theme.fonts.rob_regular,
        color: theme.colors.branco,
        fontSize: 25,
        textAlign: 'center',
        lineHeight: 30
    },
    viewButtons: {
        width: '80%',
        padding: 10,
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});