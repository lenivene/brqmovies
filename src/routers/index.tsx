import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { IStackAuthRouterProps } from "./types";
import { RootRouters } from "./root.routers";

import { useAuth } from "@hooks/auth";

import { SignInAuthScreen } from "@screens/auth/sign-in";

const Stack = createNativeStackNavigator<IStackAuthRouterProps>();

export const Routers: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <RootRouters />;
  }

  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="SignIn" component={SignInAuthScreen} />
    </Stack.Navigator>
  );
};
