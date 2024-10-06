import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationStackParamList } from "../../utils/types/Navigation.type";
import { data, DataType } from "../../data/data";

type Props = NativeStackScreenProps<NavigationStackParamList, "Screen_1">;

export const Screen_1 = ({ navigation, route }: Props) => {
    function goScreen_2() {
        navigation.navigate("Screen_2");
    }
    return (
        <View>
            <Text>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container_item}>
                            <Image
                                style={styles.image}
                                source={{ uri: item.image }}
                                width={74}
                                height={74}
                            />
                            <View style={styles.container_ShopText}>
                                <Text style={styles.text_shopTitle} numberOfLines={1}>
                                    {item.shop_name}
                                </Text>
                                <Text style={styles.text_container_shopName} numberOfLines={1}>
                                    Shop: <Text style={styles.text_shopName}>{item.title}</Text>
                                </Text>
                            </View>
                            <TouchableOpacity style={styles.containerButton}>
                                <Text style={styles.text_Button}>Chat</Text>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            ></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    container_item: {
        flexDirection: "row",
        marginVertical: 2,
        borderBottomWidth: 2,
        borderColor: "rgba(225, 225, 225,0.9)",
    },
    image: {},
    container_ShopText: {
        flex: 4,
        paddingHorizontal: 8,
    },
    text_shopTitle: {},
    text_container_shopName: {},
    text_shopName: {
        color: "red",
    },
    containerButton: {
        alignSelf: "center",
        flex: 1,
        backgroundColor: "#f10618",
        marginRight: 20,
        paddingVertical: 4,
    },
    text_Button: {
        color: "#fff",
        textAlign: "center",
        fontSize: 18,
    },
});
