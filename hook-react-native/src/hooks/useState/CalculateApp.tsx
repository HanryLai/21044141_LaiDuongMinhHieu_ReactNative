import { useState } from "react";
import { Button, Text, View } from "react-native";

const calculateInitialValue = () => {
    console.log("Calculating initial value...");
    return Math.floor(Math.random() * 100); // Simulates a heavy calculation
};
export const CalculateApp = () => {
    const [count, setCount] = useState(() => calculateInitialValue());

    return (
        <View style={{ padding: 20 }}>
            <Text>Initial Random Count: {count}</Text>
            <Button title="Increase" onPress={() => setCount(count + 1)} />
            <Button title="Reset" onPress={() => setCount(() => calculateInitialValue())} />
        </View>
    );
};
