import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { Props } from "../types/navigation.type";
const MainScreen = ({ navigation }: Props) => {
    function onPress() {
        navigation.navigate("ListScreen", {});
    }
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require("../../assets/images/image.png")} />
            <Text style={styles.title}>MANAGE YOUR {"\n"}TASK</Text>
            <View style={styles.container_inputEmail}>
                <Entypo style={styles.iconEmail} name="mail" size={24} color="black" />
                <TextInput style={styles.inputEmail} placeholder="Enter your name" />
            </View>
            <TouchableOpacity onPress={onPress} style={styles.containerBtn}>
                <Text style={styles.textBtn}>Get Started</Text>
                <Feather style={styles.btnIcon} name="arrow-right" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
    },
    img: {
        width: 271,
        height: 271,
    },
    title: {
        color: "#8353e2",
        fontSize: 24,
        textAlign: "center",
    },
    container_inputEmail: {
        flexDirection: "row",
        borderWidth: 1,
        width: "90%",
        borderRadius: 10,
        paddingVertical: 4,
        paddingHorizontal: 4,
    },
    iconEmail: {
        marginTop: 2,
        paddingHorizontal: 8,
    },
    inputEmail: {},
    containerBtn: {
        marginTop: 100,
        backgroundColor: "#00bdd6",
        flexDirection: "row",
        paddingHorizontal: 32,
        paddingVertical: 8,
        borderWidth: 1,
        borderRadius: 10,
    },
    textBtn: {
        fontSize: 24,
        color: "#fff",
    },
    btnIcon: {
        marginLeft: 8,
        marginTop: 4,
        fontSize: 24,
        color: "#fff",
    },
});

export default MainScreen;
