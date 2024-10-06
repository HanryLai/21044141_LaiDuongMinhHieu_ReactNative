import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { CartComponent } from "./src/components/headers/cart.header";
import { Screen_1 } from "./src/screens/navigations/Screen_1";
import { Screen_2 } from "./src/screens/navigations/Screen_2";
import { NavigationStackParamList } from "./src/utils/types/Navigation.type";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStack } from "./src/utils/stacks/RootStack.stack";

export default function App() {
    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    );
}
