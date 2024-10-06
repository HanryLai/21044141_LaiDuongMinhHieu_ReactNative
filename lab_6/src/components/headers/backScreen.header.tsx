import { Screen_2 } from "../../screens/navigations";
import { PropsNavigate } from "../../utils/types";
import { Button } from "react-native";

export const BackScreenComponent = ({ navigation }: PropsNavigate) => {
    function back() {
        if (!navigation.canGoBack()) navigation.navigate("Tab");
        else navigation.goBack();
    }

    return <Button onPress={back} title="Back" />;
};
