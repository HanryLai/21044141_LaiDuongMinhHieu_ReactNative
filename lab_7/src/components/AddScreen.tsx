import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Props } from "../types/navigation.type";
import { useState } from "react";
import axios from "axios";
import { api_products } from "../api/product_data.api";
const AddScreen = ({ navigation }: Props) => {
    const [job, setJob] = useState<string>("");
    function onPost() {
        alert("Your job is: " + job);
        axios
            .post(api_products + "/product", {
                title: job,
            })
            .then((res) => {
                console.log(res.data);
                alert("Post successfully ");
                navigation.navigate("ListScreen", { isReload: true });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>ADD YOUR JOB</Text>
            <View style={styles.container_Input}>
                <FontAwesome6 style={styles.iconCV} name="vcard" size={24} color="black" />
                <TextInput
                    style={styles.inputJob}
                    value={job}
                    onChangeText={(text) => setJob(text)}
                    placeholder="Input your job"
                ></TextInput>
            </View>
            <TouchableOpacity style={styles.btnContainer} onPress={() => onPost()}>
                <Text style={styles.btnText}>
                    Finish <AntDesign name="arrowright" size={24} color="black" />
                </Text>
            </TouchableOpacity>
            <Image style={styles.img} source={require("../../assets/images/image.png")} />
        </View>
    );
};

const styles = StyleSheet.create({
    img: {
        width: 271,
        height: 271,
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        flex: 1,
    },
    title: {
        fontSize: 32,
    },
    container_Input: {
        marginTop: 20,
        width: "80%",
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 4,
        paddingHorizontal: 4,
    },
    iconCV: {
        color: "green",
    },
    inputJob: {
        paddingHorizontal: 8,
    },
    btnContainer: {
        backgroundColor: "#26c3d9",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        marginVertical: 100,
    },
    btnText: {
        fontSize: 24,
    },
});

export default AddScreen;
