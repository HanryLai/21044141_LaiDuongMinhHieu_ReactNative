import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import CounterApp from "./src/hooks/useState/countApp";
import RanDomDiceRoll from "./src/hooks/useState/randomRollDice";
import { MainScreen } from "./src/hooks/mainScreen";
import { CalculateApp } from "./src/hooks/useState/CalculateApp";
import CountAppEffect from "./src/hooks/useEffect/CountAppEffect";
import DivideApp from "./src/hooks/useEffect/DivideApp";
import MyComponent from "./src/hooks/useEffect/MyComponent";
import EventListeningComponent from "./src/hooks/useEffect/EventListeningComponent";
export type RootStackParamList = {
    CountApp: undefined;
    RanDomDiceRoll: undefined;
    MainScreen: undefined;
    CalculateApp: undefined;
    CountAppEffect: undefined;
    DivideApp: undefined;
    MyComponent: undefined;
    EventListeningComponent: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="CountApp" component={CounterApp} />
                <Stack.Screen name="RanDomDiceRoll" component={RanDomDiceRoll} />
                <Stack.Screen name="CalculateApp" component={CalculateApp} />
                <Stack.Screen name="CountAppEffect" component={CountAppEffect} />
                <Stack.Screen name="DivideApp" component={DivideApp} />
                <Stack.Screen name="MyComponent" component={MyComponent} />
                <Stack.Screen name="EventListeningComponent" component={EventListeningComponent} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        color: "red",
    },
});
