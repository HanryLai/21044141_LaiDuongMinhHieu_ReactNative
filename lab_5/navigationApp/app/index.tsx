import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./phone/home-screen";
import BuyScreen from "./phone/buy-screen";
import ChooseColorScreen from "./phone/choose-screen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Buy" component={BuyScreen} />
        <Stack.Screen name="ChooseColor" component={ChooseColorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
