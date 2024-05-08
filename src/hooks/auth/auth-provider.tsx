import React, { createContext, useCallback, useMemo, useState } from "react";
import { Storage } from "@lib/storage";
import { sleep } from "@utils/await";
import { useFocusEffect } from "@react-navigation/native";
import { BackHandler } from "react-native";

const storage = new Storage<"auth">();

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider: ReactFC = ({ children }) => {
  const onHandleHardwareBackButton = () => true;

  useFocusEffect(() => {
    BackHandler.addEventListener(
      "hardwareBackPress",
      onHandleHardwareBackButton
    );

    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        onHandleHardwareBackButton
      );
    };
  });

  const [user, setUser] = useState<AuthContextProps["user"]>(null);

  const signIn: AuthContextProps["signIn"] = useCallback(async (data) => {
    await sleep(2000);

    if (String(data?.username) !== "user" || String(data?.password) !== "123") {
      throw new Error("Usuário ou senha invalido!");
    }

    const authData = {
      username: data.username,
    };

    await sleep(1500);

    storage.set("auth", JSON.stringify(authData));
    setUser(authData);
  }, []);

  const signOut: AuthContextProps["signOut"] = useCallback(async () => {
    storage.remove("auth");
    setUser(null);
  }, []);

  const isAuthenticated = !!user?.username;

  const values = useMemo(
    () => ({ user, isAuthenticated, signIn, signOut }),
    [user, isAuthenticated, signIn, signOut]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
