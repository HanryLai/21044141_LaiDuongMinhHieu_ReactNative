import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationStackParamList } from "./src/stacks";
import ToDoList from "./src/components/ToDoList.component";
import InsertToDo from "./src/components/InsertToDo.component";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/createStore.redux";
const Stack = createNativeStackNavigator<NavigationStackParamList>();
export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="ToDoList">
                    <Stack.Screen name="ToDoList" component={ToDoList} />
                    <Stack.Screen name="InsertToDo" component={InsertToDo} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
