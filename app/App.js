import React, { useEffect, useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';
import { Principal } from './src/screens/Principal';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare(){
      try{
        //Carrega as fontes
        await Font.loadAsync({ Roboto_400Regular, Montserrat_700Bold });
      }
      catch(e){
        console.warn(e);
      }
      finally{
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if(appIsReady) {
      //Layout executado
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <StatusBar
        backgroundColor='transparent'
        translucent
        style='light'
      />
      <Principal 
        layout={onLayoutRootView}
      />
    </>
  );
}