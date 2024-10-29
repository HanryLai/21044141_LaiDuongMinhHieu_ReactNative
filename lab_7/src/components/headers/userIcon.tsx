import { Image, StyleSheet, Text, View } from "react-native";
import { Props } from "../../types/navigation.type";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";

const UserIcon = ({ navigation }: Props) => {
    const route = useRoute();
    const { username } = route.params || { username: "HIEUEUEU" };
    return (
        <View style={styles.container_User}>
            <Image style={styles.avatar} source={require("../../../assets/images/avatar.png")} />
            <View>
                <Text>Hi {username}</Text>
                <Text>Have agrate day a head</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container_User: {
        flexDirection: "row",
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 20,
    },
});
export default UserIcon;
