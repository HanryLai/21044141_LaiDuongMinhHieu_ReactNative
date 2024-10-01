import { NavigationProp } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  navigation: NavigationProp<any>;
}

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flexDirection: "column", gap: 10 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Chat");
        }}
        style={styles.flat1}
      >
        <Text style={{ color: "white" }}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Flat2");
        }}
        style={styles.flat1}
      >
        <Text style={{ color: "white" }}>S2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  flat1: {
    backgroundColor: "red",
    padding: 10,
  },
});

export default HomeScreen;
