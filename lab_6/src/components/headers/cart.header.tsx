import Entypo from "@expo/vector-icons/Entypo";
import { TouchableOpacity } from "react-native";
import { PropsNavigate } from "../../utils/types";
export const CartComponent = ({ navigation }: PropsNavigate) => {
    function onPress() {
        navigation.navigate("Screen_2");
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <Entypo name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>
    );
};
