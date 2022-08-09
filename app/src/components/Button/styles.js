import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.lilas,
        height: Dimensions.get('window').width * 0.22,
        width: Dimensions.get('window').width * 0.22,
        borderRadius: Dimensions.get('window').width * 0.50 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
});