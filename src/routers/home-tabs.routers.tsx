import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTheme } from "styled-components";

import { AllMoviesHomeScreen, FavoriteMoviesHomeScreen } from "@screens/home";
import { HeaderHome } from "@components/header/home";

const TopTabs = createMaterialTopTabNavigator();

export const HomeTabsRouters: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <HeaderHome />
      <TopTabs.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.grey,
          tabBarStyle: {
            backgroundColor: theme.colors.neutral,
            borderBottomColor: theme.colors.tertiary,
            borderBottomWidth: 2
          },
          tabBarLabelStyle: { fontSize: 16, fontFamily: theme.fonts.regular },
          tabBarIndicatorStyle: {
            backgroundColor: theme.colors.primary,
            borderBottomColor: theme.colors.primary,
            borderBottomWidth: 4,
            marginBottom: -2,
          },
        }}
      >
        <TopTabs.Screen
          navigationKey="allMovies"
          name="Todos os filmes"
          component={AllMoviesHomeScreen}
        />
        <TopTabs.Screen
          navigationKey="favoriteMovies"
          name="Filmes Favoritos"
          component={FavoriteMoviesHomeScreen}
        />
      </TopTabs.Navigator>
    </>
  );
};
