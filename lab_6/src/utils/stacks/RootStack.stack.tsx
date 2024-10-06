import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationStackParamList } from "../types";
import { RootNavigation } from "./RootNavigation.stack";
import { RootTab } from "./RootTab.stack";

const Stack = createNativeStackNavigator<NavigationStackParamList>();
export const RootStack = () => {
    return (
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={RootNavigation} options={{ headerShown: false }} />
            <Stack.Screen
                name="Tab"
                component={RootTab}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};
