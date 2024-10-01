import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface ItemProps {
  title: string;
  shopName: string;
  image: string;
}

export const Item2 = ({ title, shopName, image }: ItemProps) => (
  <View style={styles.container}>
    <View style={styles.product}>
      <Image source={{ uri: image }} width={64} height={64}></Image>
      <View style={styles.text}>
        <Text>{title}</Text>
        <Text style={{ color: "red" }}>{shopName}</Text>
      </View>
    </View>
    <View style={styles.product}>
      <Image source={{ uri: image }} width={64} height={64}></Image>
      <View style={styles.text}>
        <Text>{title}</Text>
        <Text style={{ color: "red" }}>{shopName}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    borderWidth: 1,
    padding: 5,
    alignItems: "center",
  },
  product: {
    flexDirection: "row",
    gap: 10,
  },
  text: {
    flexDirection: "column",
    gap: 10,
  },
  btnChat: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    width: 64,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
  },
  textBtn: {
    color: "white",
  },
});
