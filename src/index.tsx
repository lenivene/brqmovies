import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

import {
  Roboto_400Regular,
  Roboto_500Medium,
  useFonts as useRegularFonts,
} from "@expo-google-fonts/roboto";

import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts as useNunitoFonts,
} from "@expo-google-fonts/nunito";

import { Hooks } from "@hooks";
import { Routers } from "@routers";

SplashScreen.preventAutoHideAsync();

export const InitialApp: React.FC = () => {
  const [fontsRegularIsLoaded] = useRegularFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  const [fontsNunitoIsLoaded] = useNunitoFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  useEffect(() => {
    const removeSplashScreenIfFontLoaded = async () => {
      if (!fontsRegularIsLoaded || !fontsNunitoIsLoaded) return;

      await SplashScreen.hideAsync();
    };

    removeSplashScreenIfFontLoaded();
  }, [fontsRegularIsLoaded, fontsNunitoIsLoaded]);

  if (!fontsRegularIsLoaded || !fontsNunitoIsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Hooks>
        <Routers />
      </Hooks>
    </NavigationContainer>
  );
};
