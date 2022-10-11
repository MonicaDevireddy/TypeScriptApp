import { StyleSheet } from "react-native";
import colors from "../globalConstants/colors";
import { heightDp, widthDp } from "../globalConstants/dimensions";

export const styles = StyleSheet.create({
    row:{
        width: widthDp(98),
        paddingVertical: heightDp(1)
    },
    plusIcon:{
        height: widthDp(10),
        width: widthDp(10),
        backgroundColor: colors.pink,
        borderRadius: widthDp(5),
        position: 'absolute',
        right: widthDp(5),
        top: heightDp(80),
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.pink,
        shadowOffset: {
            height: widthDp(1),
            width: widthDp(1)
        },
        shadowOpacity: 0.3
    }
})