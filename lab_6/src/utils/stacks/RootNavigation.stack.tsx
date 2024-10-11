import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BackScreenComponent } from "../../components/headers/backScreen.header";
import { CartComponent } from "../../components/headers/cart.header";
import { Screen_1 } from "../../screens/navigations/Screen_1";
import { Screen_2 } from "../../screens/navigations/Screen_2";
import { NavigationStackParamList, PropsNavigate } from "../types/Navigation.type";
import { CustomerHeader } from "../../components/headers/customer.header";

const Stack = createNativeStackNavigator<NavigationStackParamList>();
export const RootNavigation = ({ navigation }: PropsNavigate) => {
    return (
        <Stack.Navigator initialRouteName="Screen_1">
            <Stack.Screen
                name="Screen_1"
                component={Screen_1}
                options={({ navigation }) => ({
                    title: "Chat",
                    headerStyle: {
                        backgroundColor: "#1ba9ff",
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                    headerTitleAlign: "center",
                    headerRight: () => CartComponent({ navigation } as unknown as PropsNavigate),
                    headerLeft: () =>
                        BackScreenComponent({ navigation } as unknown as PropsNavigate),
                })}
            />
            <Stack.Screen
                name="Screen_2"
                component={Screen_2}
                options={{
                    header: ({ navigation }) =>
                        CustomerHeader({ navigation } as unknown as PropsNavigate),
                }}
            />
        </Stack.Navigator>
    );
};
