import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { PropsNavigate } from "../../utils/types";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
export const CustomerHeader = ({ navigation }: PropsNavigate) => {
    function goBack() {
        console.log("navigation", navigation);
        navigation.goBack();
    }
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.containerLeft} onPress={goBack}>
                <Ionicons name="arrow-back-outline" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.containerCenter}>
                <AntDesign name="search1" size={24} color="black" />
                <TextInput placeholder="Tím kiếm"></TextInput>
            </View>
            <View style={styles.containerRight}>
                <Entypo name="shopping-cart" size={24} color="black" />
                <Entypo name="dots-three-horizontal" size={24} color="black" />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 60,
        paddingHorizontal: 15,
        backgroundColor: "#26a9fd",
    },

    containerLeft: {},
    containerCenter: {
        backgroundColor: "#fff",
        width: 200,
        flexDirection: "row",
    },
    containerRight: {
        flexDirection: "row",
    },
});
