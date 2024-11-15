import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MainComponent } from "./src/components/main.component";
import { store } from "./src/redux/store.redux";
import { Screen_2 } from "./src/components/screen_2.component";
import { Screen_3 } from "./src/components/screen_3.component";
import { AddComponent } from "./src/components/add.component";
const Stack = createNativeStackNavigator<any>();
export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="main">
                        <Stack.Screen
                            name="main"
                            component={MainComponent}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="screen_2"
                            component={Screen_2}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="screen_3"
                            component={Screen_3}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="add_screen"
                            component={AddComponent}
                            options={{ headerShown: false }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    );
}
