import { useState } from "react";
import { Button, Text, View } from "react-native";

const CounterApp = () => {
    const [count, setCount] = useState(0);
    return (
        <View>
            <Text>Count: {count}</Text>
            <Button title="Increase" onPress={() => setCount(count + 1)} />
            <Button title="decrease" onPress={() => setCount(count - 1)} />
        </View>
    );
};

export default CounterApp;
