import React, { useEffect, useState } from 'react';
import { View, Text, PixelRatio } from 'react-native';
import { Line } from '../../components/Line';
import { Button } from '../../components/Button'; 
import { styles } from './styles';
import { api } from '../../services/api';
import { captureRef, captureScreen } from 'react-native-view-shot';

export function Principal(props){
    const onLayoutRootView = props.layout;
    const [message, setMessage] = useState(null);
    const [idMessage, setIdMessage] = useState(0);

    function randomIdMessage(){
        const max = 224;
        let number = Math.floor(Math.random() * max) + 1;
        setIdMessage(number);
    }

    async function refreshMessage(){
        await randomIdMessage()

        const response = await api.get(`/${idMessage}`);
        const advice = response.data.slip.advice;

        setMessage(advice);
    }

    useEffect(() => {
        async function initialize(){
            const response = await api.get();
            const advice = response.data.slip.advice;
            setMessage(advice);
            
            //console.log(response);
        }

        initialize()
        randomIdMessage()
    }, []);

    function saveMessage(){
        /*captureScreen({
            format: "png",
            quality: 0.8
        }).then(
            uri => console.log("Image saved to", uri),
            error => console.error("Oops, snapshot failed", error)
        );*/
        console.log('Clicou')
    }

    return (
        <View onLayout={onLayoutRootView} style={styles.container}>
            <View style={styles.viewMessage}>
                <Text style={styles.title}>Message</Text>

                <View style={styles.viewTextMessage}>
                    <Text style={styles.message}>
                        {message}
                    </Text>
                </View>

                <Line />

                <View style={styles.viewButtons}>
                    <Button icon='save' click={saveMessage} />
                    <Button icon='refresh' click={refreshMessage} />
                </View>
            </View>
        </View>
    );
}