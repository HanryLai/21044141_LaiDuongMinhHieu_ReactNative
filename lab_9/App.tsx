import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { decremented, incremented, store } from "./src/redux";
export default function App() {
    const [value, setValue] = useState(store.getState().value);
    store.subscribe(() => {
        setValue(store.getState().value);
    });
    return (
        <View style={styles.container}>
            <Text>Count {value}</Text>
            <button onClick={() => store.dispatch(incremented())}>Increment</button>
            <button onClick={() => store.dispatch(decremented())}>Decrement</button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
