import React, { useEffect, useState } from "react";
import { DeviceEventEmitter, Text, View } from "react-native";

const EventListeningComponent = () => {
    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        const subscription = DeviceEventEmitter.addListener("eventName", (data) => {
            setEventData(data);
        });

        return () => {
            subscription.remove();
        };
    }, []);

    return (
        <View>
            <Text>{eventData ? JSON.stringify(eventData) : "No data yet"}</Text>
        </View>
    );
};

export default EventListeningComponent;
