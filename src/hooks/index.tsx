import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootSiblingParent } from "react-native-root-siblings";
import { ThemeProvider } from "styled-components";
import { PaperProvider } from "react-native-paper";

import { AuthProvider } from "./auth/auth-provider";
import { theme } from "@styles/theme";
import { MovieProvider } from "./movie/movie-provider";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const Hooks: ReactFC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PaperProvider>
          <RootSiblingParent>
            <SafeAreaProvider>
              <AuthProvider>
                <MovieProvider>{children}</MovieProvider>
              </AuthProvider>
            </SafeAreaProvider>
          </RootSiblingParent>
        </PaperProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};
