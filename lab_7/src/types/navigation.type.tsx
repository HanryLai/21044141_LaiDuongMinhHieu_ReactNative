import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type NavigationType = {
    MainScreen: undefined;
    ListScreen: { isReload?: boolean };
    AddScreen: undefined;
};

export type Props = {
    navigation: NativeStackNavigationProp<NavigationType>;
    route: RouteProp<NavigationType>;
};
