import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Item2 } from "@/app/cart/item2";
import Data from "@/data/product";
import { NavigationProp } from "@react-navigation/native";

interface Props {
  navigation: NavigationProp<any>;
}

export default function ListProduct2({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={{ padding: 20 }}>
        Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
      </Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={Data}
          renderItem={({ item }) => (
            <Item2
              title={item.title}
              shopName={item.shop_name}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
