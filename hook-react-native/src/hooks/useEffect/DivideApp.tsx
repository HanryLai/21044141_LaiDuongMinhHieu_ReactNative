import React, { useState, useEffect } from "react";
import { Button } from "react-native";

export default function DivideApp() {
    const [count, setCount] = useState(0);
    const [countEvery3, setCountEvery3] = useState(Math.floor(count / 3));

    useEffect(() => {
        console.log(countEvery3);
    }, []);

    return (
        <Button
            title={`Increment ${count}`}
            onPress={() => {
                setCount(count + 1);
            }}
        />
    );
}
