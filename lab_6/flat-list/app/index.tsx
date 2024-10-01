import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListProduct from "./cart/flat-1";
import ListProduct2 from "./cart/flat-2";
import HomeScreen from "./cart/home";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ListProduct} />
        <Stack.Screen name="Flat2" component={ListProduct2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
