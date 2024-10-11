import { Image, StyleSheet, Text, View } from "react-native";
import { Props } from "../../types/navigation.type";

const UserIcon = ({ navigation }: Props) => {
    return (
        <View style={styles.container_User}>
            <Image style={styles.avatar} source={require("../../../assets/images/avatar.png")} />
            <View>
                <Text>Hi Twinkle</Text>
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
