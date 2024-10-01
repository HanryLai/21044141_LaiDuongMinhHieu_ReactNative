import { useEffect, useState } from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { NavigationProp, RouteProp } from "@react-navigation/native";

type HomeScreenProps = {
  navigation: NavigationProp<any>;
  route: RouteProp<{ params: { selectedColor?: string } }, "params">;
};

export default function HomeScreen({ navigation, route }: HomeScreenProps) {
  const [color, setColor] = useState("#234896");

  useEffect(() => {
    if (route.params?.selectedColor) {
      setColor(route.params.selectedColor);
    }
  }, [route.params?.selectedColor]);

  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <Image
          source={
            color === "#FFFFFF"
              ? require("@/assets/images/phone-white.png")
              : color === "red"
              ? require("@/assets/images/phone-red.png")
              : color === "black"
              ? require("@/assets/images/phone-black.png")
              : require("@/assets/images/phone-blue.png")
          }
        ></Image>
        <Text style={styles.textPhone}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>
      <View style={styles.rating}>
        <View style={styles.stars}>
          <Image
            width={301}
            height={361}
            source={require("@/assets/images/star.png")}
          />
          <Image source={require("@/assets/images/star.png")} />
          <Image source={require("@/assets/images/star.png")} />
          <Image source={require("@/assets/images/star.png")} />
          <Image source={require("@/assets/images/star.png")} />
        </View>
        <Text style={styles.textRating}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={styles.price}>
        <View style={styles.textPrices}>
          <Text style={styles.textPrice}>1.790.000 đ</Text>
          <Text style={styles.textListPrice}>1.790.000 đ</Text>
        </View>
        <View style={styles.help}>
          <Text style={styles.textNotify}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("@/assets/images/question.png")}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ChooseColor");
        }}
        style={styles.chooseColor}
      >
        <Text style={{ fontSize: 15, fontWeight: 400 }}>
          4 MÀU-CHỌN MÀU {">"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Buy");
        }}
        style={styles.btnBuy}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          CHỌN MUA
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    flexDirection: "column",
    gap: 10,
    paddingLeft: 60,
  },
  product: {},
  textPhone: {
    fontSize: 15,
    fontWeight: 400,
  },
  rating: {
    flexDirection: "row",
    gap: 24,
  },
  stars: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  textRating: {
    fontSize: 15,
    fontWeight: 400,
  },
  price: {
    flexDirection: "column",
    gap: 10,
  },
  help: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  textPrice: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textListPrice: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#999",
    textDecorationLine: "line-through",
  },
  textPrices: {
    flexDirection: "row",
    gap: 64,
    alignItems: "center",
  },
  textNotify: {
    fontSize: 12,
    fontWeight: "bold",
    color: "red",
  },
  chooseColor: {
    width: "80%",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    shadowRadius: 4,
    marginBottom: 24,
  },
  btnBuy: {
    width: "80%",
    backgroundColor: "red",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOpacity: 0.5,
  },
});
