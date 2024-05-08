import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type IStackAuthRouterProps = {
  SignIn: undefined;
};

export type IStackRootRouterProps = {
  Home: undefined;
  SingleDetails: undefined;
};

export interface IStackRouterProps {
  Auth: NavigatorScreenParams<IStackAuthRouterProps>;
}

export interface IHomeTabsRoutersProps
  extends NativeStackNavigationProp<IStackRootRouterProps> {}
