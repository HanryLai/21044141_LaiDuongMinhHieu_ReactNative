import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { NavigationStackParamList } from "../../utils/types/Navigation.type";
import { dataScreen2, DataTypeScreen_2 } from "../../data/dataScreen_2";
type Props = NativeStackScreenProps<NavigationStackParamList, "Screen_2">;
export const Screen_2 = ({ navigation }: Props) => {
    return (
        <View>
            <FlatList
                style={styles.container}
                data={dataScreen2}
                numColumns={2}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container_Item}>
                            <Image source={{ uri: item.image }} width={155} height={120} />
                            <Text numberOfLines={1}>{item.name}</Text>
                            <View style={styles.container_rating}>
                                <Image
                                    style={styles.rating_image}
                                    source={require("../../../assets/images/image.png")}
                                />
                                <Image
                                    style={styles.rating_image}
                                    source={require("../../../assets/images/image.png")}
                                />
                                <Image
                                    style={styles.rating_image}
                                    source={require("../../../assets/images/image.png")}
                                />
                                <Image
                                    style={styles.rating_image}
                                    source={require("../../../assets/images/image.png")}
                                />
                                <Image
                                    style={styles.rating_image}
                                    source={require("../../../assets/images/image copy.png")}
                                />
                                <Text>(15)</Text>
                            </View>
                            <Text>
                                {item.price} <Text> -39%</Text>
                            </Text>
                        </View>
                    );
                }}
                columnWrapperStyle={styles.wrapper}
            ></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
    },
    container_Item: {
        flex: 1,
        backgroundColor: "#ccc",
        paddingHorizontal: 50,
        alignItems: "center",
        paddingVertical: 8,
    },
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    container_rating: {
        flexDirection: "row",
        justifyContent: "center",
    },
    rating_image: {
        width: 13,
        height: 13,
    },
});
