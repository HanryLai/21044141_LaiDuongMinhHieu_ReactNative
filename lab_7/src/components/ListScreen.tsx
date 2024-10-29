import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Props } from "../types/navigation.type";
import { useEffect, useState } from "react";
import axios from "axios";
import { api_products, ListDataType } from "../api/product_data.api";
const ListScreen = ({ navigation, route }: Props) => {
    const [data, setData] = useState<ListDataType[]>([]);
    const [updateData, setUpdateData] = useState<ListDataType>();
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    useEffect(() => {
        fetchData();
        if (route.params?.isReload) {
            fetchData();
            console.log("RELOAD", route.params.isReload);
        }
    }, [route]);

    function fetchData() {
        axios
            .get(api_products + "/product")
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function onDelete(id: string) {
        axios
            .delete(api_products + "/product/" + id)
            .then((res) => {
                alert("Delete successfully ");
                fetchData();
            })
            .catch((err) => {
                alert("THE FUCKING DELETE ITEM");
            });
    }

    function onPut(id: string) {
        axios
            .put(api_products + "/product/" + id, {
                ...data, // dữ liệu cần update
            })
            .then((res) => {
                alert("update successfully ");
                fetchData(); // reload UI
            })
            .catch((err) => {
                alert("Failed" + err);
            });
    }

    function onUpdate(item: ListDataType) {
        if (isUpdate == true) {
            alert("You must final update other item before update new item");
            return null;
        }
        setUpdateData(item);
        setIsUpdate(true);
    }

    function onConfirmUpdate() {
        axios
            .put(api_products + "/product" + updateData?.id, updateData)
            .then((res) => {
                alert("UPDATE SUCCESSFULLY");
                setIsUpdate(false), fetchData();
            })
            .catch((err) => {
                alert("LỖI CMNr");
            });
    }

    function checkAndUncheck(id: string, isComplete: boolean) {
        axios
            .put(api_products + "/product/" + id, {
                completed: !isComplete,
            })
            .then((res) => {
                alert("Update successfully");
                fetchData();
            })
            .catch((err) => {
                alert("LỖI CMNr");
            });
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Feather style={styles.searchIcon} name="search" size={24} color="black" />
                <TextInput style={styles.searchInput} placeholder="Search" />
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container_item}>
                            {item.completed ? (
                                <AntDesign
                                    style={styles.checkIcon}
                                    onPress={() => checkAndUncheck(item.id, item.completed)}
                                    name="checksquareo"
                                    size={24}
                                    color="black"
                                />
                            ) : (
                                <FontAwesome
                                    style={styles.checkIcon}
                                    onPress={() => checkAndUncheck(item.id, item.completed)}
                                    name="square-o"
                                    size={24}
                                    color="black"
                                />
                            )}

                            <Text style={styles.title}>{item.title}</Text>
                            <TextInput value={item.title}></TextInput>
                            <TouchableOpacity
                                style={styles.btnEvent}
                                onPress={() => {
                                    onDelete(item.id);
                                }}
                            >
                                <Text style={styles.textEvent}>DELETE </Text>
                            </TouchableOpacity>
                            {isUpdate && updateData?.id == item.id ? (
                                <MaterialIcons
                                    onPress={() => onConfirmUpdate()}
                                    name="cancel"
                                    size={24}
                                    color="black"
                                />
                            ) : (
                                <View>
                                    <Entypo
                                        style={styles.editIcon}
                                        onPress={() => onUpdate(item)}
                                        name="pencil"
                                        size={24}
                                        color="black"
                                    />
                                    <EvilIcons name="check" size={24} color="black" />
                                </View>
                            )}
                        </View>
                    );
                }}
            ></FlatList>
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => navigation.navigate("AddScreen")}
            >
                <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        flex: 1,
    },
    searchContainer: {
        flexDirection: "row",
        borderWidth: 1,
        width: "80%",
        marginVertical: 32,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 10,
    },
    searchIcon: {},
    searchInput: {},
    container_item: {
        width: "98%",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#d2d5d8",
        marginVertical: 8,
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderRadius: 20,
    },
    checkIcon: {
        color: "green",
        paddingHorizontal: 8,
    },
    title: {
        flex: 1,
    },
    editIcon: {
        color: "red",
        margin: "auto",
    },
    btnContainer: {
        width: 100,
        height: 100,
        backgroundColor: "#26c3d9",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        marginBottom: 100,
    },
    btnText: {
        color: "#fff",
        fontSize: 50,
    },

    btnEvent: {
        width: 70,
        height: 40,
        backgroundColor: "#26c3d9",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        marginHorizontal: 4,
    },
    textEvent: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 12,
    },
});
export default ListScreen;
