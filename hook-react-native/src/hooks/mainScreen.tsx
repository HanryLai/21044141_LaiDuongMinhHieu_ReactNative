import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { RootStackParamList } from "../../App";
type Props = NativeStackScreenProps<RootStackParamList>;
export const MainScreen = ({ navigation }: Props) => {
    return (
        <View>
            <Text onPress={() => navigation.navigate("CountApp")}>Count app</Text>
            <Text onPress={() => navigation.navigate("RanDomDiceRoll")}>RanDom Dice Roll</Text>
            <Text onPress={() => navigation.navigate("CalculateApp")}>CalculateApp</Text>
            <Text onPress={() => navigation.navigate("CountAppEffect")}>CountAppEffect</Text>
            <Text onPress={() => navigation.navigate("DivideApp")}>DivideApp</Text>
            <Text onPress={() => navigation.navigate("MyComponent")}>MyComponent</Text>
            <Text onPress={() => navigation.navigate("EventListeningComponent")}>
                EventListeningComponent
            </Text>
        </View>
    );
};
