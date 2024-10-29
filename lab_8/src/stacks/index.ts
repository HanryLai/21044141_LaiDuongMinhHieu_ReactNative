import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type NavigationStackParamList = {
    ToDoList: undefined;
    InsertToDo: undefined;
};

export type RouteStackParamList = {};

export type PropsNavigate = NativeStackScreenProps<NavigationStackParamList>;
