import axios from "axios";
import { useEffect } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { listProductHook, listProductSlice } from "../redux/reducer.redux";

export const Screen_2 = () => {
    const dispatch = useDispatch();
    const listProduct = useSelector(listProductHook);
    useEffect(() => {
        axios
            .get("https://67089ae28e86a8d9e42f653c.mockapi.io/api/product")
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                console.log(data);
                dispatch(listProductSlice.actions.getListProduct(data));
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <View
            style={{
                marginTop: 100,
            }}
        >
            <Text
                style={{
                    color: "#e94141",
                    fontSize: 28,
                    fontWeight: "bold",
                }}
            >
                The world’s Best Bike
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: "100%",
                    margin: "auto",
                    marginTop: 20,
                }}
            >
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: "#e94141",
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                        width: "20%",
                    }}
                >
                    <Text
                        style={{
                            color: "#e94141",
                            fontSize: 18,
                            textAlign: "center",
                        }}
                    >
                        All
                    </Text>
                </View>
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: "#e94141",
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                    }}
                >
                    <Text
                        style={{
                            color: "#e94141",
                            fontSize: 18,
                        }}
                    >
                        Roadbike
                    </Text>
                </View>
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: "#e94141",
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                    }}
                >
                    <Text
                        style={{
                            color: "#e94141",
                            fontSize: 18,
                        }}
                    >
                        Mountain
                    </Text>
                </View>
            </View>

            <View style={{ width: "100%", marginTop: 100 }}>
                <FlatList
                    data={listProduct}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={{
                                    backgroundColor: "#fef5ec",
                                    margin: "auto",
                                    justifyContent: "space-around",
                                    width: "40%",
                                    marginVertical: 12,
                                    borderRadius: 8,
                                    paddingVertical: 8,
                                }}
                            >
                                <Image
                                    style={{
                                        width: 24,
                                        height: 24,
                                        borderWidth: 1,
                                        position: "absolute",
                                    }}
                                    source={require("../../assets/img/tym.png")}
                                />
                                <Image
                                    style={{
                                        width: 100,
                                        height: 140,
                                        margin: "auto",
                                    }}
                                    source={{ uri: item.image }}
                                />
                                <Text style={{ textAlign: "center", fontSize: 18 }}>
                                    {item.title}
                                </Text>
                                <Text style={{ textAlign: "center" }}>
                                    <Text style={{ color: "yellow" }}>$</Text>
                                    {item.price}
                                </Text>
                            </View>
                        );
                    }}
                    numColumns={2}
                />
            </View>
        </View>
    );
};
