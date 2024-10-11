import { NavigationContainer } from "@react-navigation/native";
import {} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationType, Props } from "./src/types/navigation.type";
import MainScreen from "./src/components/MainScreen";
import ListScreen from "./src/components/ListScreen";
import AddScreen from "./src/components/AddScreen";
import UserIcon from "./src/components/headers/userIcon";
import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const Stack = createNativeStackNavigator<NavigationType>();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainScreen">
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen
                    name="ListScreen"
                    component={ListScreen}
                    options={({ navigation }: Props) => ({
                        headerRight: () => UserIcon({ navigation } as unknown as Props),
                        title: "",
                    })}
                />
                <Stack.Screen
                    name="AddScreen"
                    component={AddScreen}
                    options={({ navigation }: Props) => ({
                        headerLeft: () => UserIcon({ navigation } as unknown as Props),
                        title: "",
                        headerRight: () => (
                            <View>
                                <AntDesign
                                    name="arrowleft"
                                    onPress={() => navigation.navigate("ListScreen")}
                                    size={24}
                                    color="black"
                                />
                            </View>
                        ),
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
