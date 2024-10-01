import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { NavigationProp } from "@react-navigation/native";

type Props = {
  navigation: NavigationProp<any>;
};

const ChooseColorScreen = ({ navigation }: Props) => {
  const [color, setColor] = useState("#234896");
  const handleSelectColor = () => {
    navigation.navigate("Home", { selectedColor: color });
  };
  return (
    <View style={styles.container}>
      <View style={styles.product}>
        {color === "#FFFFFF" ? (
          <Image
            style={styles.image}
            source={require("@/assets/images/phone-white.png")}
          ></Image>
        ) : color === "red" ? (
          <Image
            style={styles.image}
            source={require("@/assets/images/phone-red.png")}
          ></Image>
        ) : color === "black" ? (
          <Image
            style={styles.image}
            source={require("@/assets/images/phone-black.png")}
          ></Image>
        ) : (
          <Image
            style={styles.image}
            source={require("@/assets/images/phone-blue.png")}
          ></Image>
        )}
        <View style={styles.info}>
          <Text>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
          <Text style={{ fontSize: 15 }}>
            Màu:{" "}
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {color === "#FFFFFF"
                ? "xanh pastel"
                : color === "red"
                ? "đỏ"
                : color === "black"
                ? "đen"
                : "xanh dương"}
            </Text>
          </Text>
          <Text style={{ fontSize: 15 }}>
            Cung cấp bởi{" "}
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Tiki Tradding
            </Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>1.790.000 đ</Text>
        </View>
      </View>
      <View style={styles.color}>
        <Text style={{ fontSize: 18, fontWeight: 400 }}>
          Chọn một màu bên dưới:
        </Text>
        <View style={{ flexDirection: "column", gap: 30 }}>
          <View style={styles.listColor}>
            <TouchableOpacity
              onPress={() => setColor("#FFFFFF")}
              style={{ width: 85, height: 80, backgroundColor: "#FFFFFF" }}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("red")}
              style={{ width: 85, height: 80, backgroundColor: "red" }}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("black")}
              style={{ width: 85, height: 80, backgroundColor: "black" }}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#234896")}
              style={{ width: 85, height: 80, backgroundColor: "#234896" }}
            ></TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.btnSelect}
            onPress={handleSelectColor}
          >
            <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
              XONG
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 20,
  },
  product: {
    flexDirection: "row",
    gap: 10,
  },
  info: {
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
  },
  image: {
    width: 112,
    height: 132,
  },
  color: {
    flexDirection: "column",
    gap: 10,
    backgroundColor: "#c4c4c4",
    padding: 10,
  },
  listColor: {
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnSelect: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#6b95ff",
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 4,
  },
});

export default ChooseColorScreen;
