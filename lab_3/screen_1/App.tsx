import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.circle}></View>
            <Text
                style={{
                    textAlign: "center",
                    marginVertical: 40,
                    fontSize: 32,
                    fontWeight: 700,
                }}
            >
                GROW {`\n`} YOUR BUSINESS
            </Text>
            <Text
                style={{
                    textAlign: "center",
                    marginVertical: 40,
                }}
            >
                We will help you to grow your business using online server
            </Text>
            <View style={styles.container_button}>
                {/* <Button title="LOGIN" color="#e3c000" />
                <Button title="SIGN UP" color="#e3c000" /> */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.button}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.button}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00ccf9",
    },
    circle: {
        width: 140,
        height: 140,
        borderWidth: 10,
        borderRadius: 100,
        paddingLeft: 110,
        paddingTop: 67,
        marginTop: 80,
        alignSelf: "center",
    },
    container_button: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    button: {
        backgroundColor: "#e3c000",
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
});
