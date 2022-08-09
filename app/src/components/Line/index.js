import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export function Line(){
    return (
        <View style={styles.container}>
            <Text style={styles.line}>
                _________________
            </Text>
        </View>
    );
}