import axios from "axios";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export const AddComponent = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    function add() {
        axios
            .post("https://67089ae28e86a8d9e42f653c.mockapi.io/api/product", {
                title: title,
                image: image,
                price: price,
                description: description,
            })
            .then((res) => {
                res.data;
            })
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <View
            style={{
                marginTop: 100,
            }}
        >
            <Text
                style={{
                    color: "#e94141",
                    fontSize: 18,
                    textAlign: "center",
                }}
            >
                ADD
            </Text>

            <View>
                <Text>title</Text>
                <TextInput
                    style={{
                        width: "100%",
                        backgroundColor: "red",
                    }}
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                />
            </View>
            <View>
                <Text>description</Text>
                <TextInput
                    style={{
                        width: "100%",
                        backgroundColor: "red",
                    }}
                    value={description}
                    onChangeText={(text) => setDescription(text)}
                />
            </View>
            <View>
                <Text>price</Text>
                <TextInput
                    style={{
                        width: "100%",
                        backgroundColor: "red",
                    }}
                    value={price}
                    onChangeText={(text) => setPrice(text)}
                />
            </View>
            <View>
                <Text>image</Text>
                <TextInput
                    style={{
                        width: "100%",
                        backgroundColor: "red",
                    }}
                    value={image}
                    onChangeText={(text) => setImage(text)}
                />
            </View>
            <TouchableOpacity
                style={{
                    borderWidth: 1,
                    borderColor: "#e94141",
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    width: "30%",
                }}
            >
                <Text
                    style={{
                        color: "#e94141",
                        fontSize: 18,
                        textAlign: "center",
                    }}
                    onPress={add}
                >
                    SUMBIT
                </Text>
            </TouchableOpacity>
        </View>
    );
};
