import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { IStackRootRouterProps } from "./types";

import { HomeTabsRouters } from "./home-tabs.routers";
import { SingleDetailsScreen } from "@screens/single-details";

const Stack = createNativeStackNavigator<IStackRootRouterProps>();

export const RootRouters: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="Home" component={HomeTabsRouters} />
      <Stack.Screen name="SingleDetails" component={SingleDetailsScreen} />
    </Stack.Navigator>
  );
};
