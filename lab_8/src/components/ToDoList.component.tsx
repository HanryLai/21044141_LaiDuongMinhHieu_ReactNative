import { FlatList, ScrollView, Text, View } from "react-native";
import { fetchData, useAppDispatch, useAppSelector } from "../redux/createStore.redux";
import { useEffect } from "react";

const ToDoList = () => {
    const dispatch = useAppDispatch();
    const todoList = useAppSelector((state) => state.toDoList.todoList);

    useEffect(() => {
        alert("Data fetching");
        dispatch(fetchData());
    }, [dispatch]);
    return (
        <View>
            <Text>ToDo List</Text>
            <ScrollView>
                <FlatList
                    data={todoList}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.title}</Text>
                        </View>
                    )}
                ></FlatList>
            </ScrollView>
        </View>
    );
};

export default ToDoList;
