import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <View style={{ flexDirection: "row", gap: 16 }}>
          <Image source={require("@/assets/images/book.png")} />
          <View style={styles.info}>
            <Text style={styles.text}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.text}>Cung cấp bởi Tiki Trading</Text>
            <Text style={{ color: "red", fontSize: 18, fontWeight: "bold" }}>
              141.800đ
            </Text>
            <Text
              style={{ color: "#6d6b6b", textDecorationLine: "line-through" }}
            >
              141.800đ
            </Text>
            <View style={{ flexDirection: "row", gap: "100%" }}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text>-</Text>
                </TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity style={styles.button}>
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Text style={{ color: "blue", fontWeight: "bold" }}>
                  Mua sau
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "column", gap: 32 }}>
          <View style={styles.discountText}>
            <Text>Mã giảm giá đã lưu</Text>
            <TouchableOpacity>
              <Text style={{ color: "blue", fontWeight: "bold" }}>
                Xem tại đây
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", gap: "40%" }}>
            <TouchableOpacity style={styles.discount}>
              <View
                style={{ backgroundColor: "#F2DD1B", width: 32, height: 16 }}
              ></View>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                Mã giảm giá
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonApply}>
              <Text
                style={{ fontWeight: "bold", fontSize: 18, color: "white" }}
              >
                Áp dụng
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.questionDiscount}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 12,
          }}
        >
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "blue", fontWeight: "bold" }}>Xem tại đây</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.unitPrice}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Tạm tính
        </Text>
        <Text style={{ color: "red", fontSize: 18, fontWeight: "bold" }}>
          141.800đ
        </Text>
      </View>
      <View style={styles.totalPrice}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              color: "#808080",
            }}
          >
            Thành tiền
          </Text>
          <Text style={{ color: "red", fontSize: 18, fontWeight: "bold" }}>
            141.800đ
          </Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity style={styles.buttonOrder}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              TIẾN HÀNH ĐẶT HÀNG
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 128,
    flexDirection: "column",
    gap: 16,
    backgroundColor: "#C4C4C4",
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
  },
  info: {
    flexDirection: "column",
    gap: 12,
  },
  product: {
    flexDirection: "column",
    gap: 12,
    backgroundColor: "white",
    padding: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
  },
  button: {
    backgroundColor: "#cac9c9",
    width: 14,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  discountText: {
    flexDirection: "row",
    gap: 16,
  },
  discount: {
    flexDirection: "row",
    gap: 16,
    borderWidth: 1,
    width: 208,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonApply: {
    backgroundColor: "blue",
    width: 99,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  questionDiscount: {
    backgroundColor: "white",
    padding: 12,
    flexDirection: "row",
    gap: 16,
  },
  unitPrice: {
    backgroundColor: "white",
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalPrice: {
    backgroundColor: "white",
    padding: 12,
    flexDirection: "column",
    gap: 16,
    marginTop: 64,
  },
  buttonOrder: {
    backgroundColor: "red",
    width: 331,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
});
