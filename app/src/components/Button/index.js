import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function Button(props){
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={props.click}>
            <Text>
                <MaterialIcons 
                    name={props.icon}
                    size={45}
                    color={theme.colors.branco}
                />
            </Text>
        </TouchableOpacity>
    );
}