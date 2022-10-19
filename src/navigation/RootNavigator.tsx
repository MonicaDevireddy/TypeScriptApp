import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import InitialStack from "./InitialStack";

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <InitialStack />
        </NavigationContainer>
    )
}

export default RootNavigator;