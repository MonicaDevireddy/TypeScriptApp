import { StyleSheet } from "react-native";
import colors from "../globalConstants/colors";
import { fontSize, heightDp, widthDp } from "../globalConstants/dimensions";

export const styles = StyleSheet.create({
    row: {
        width: widthDp(98),
        paddingVertical: heightDp(1)
    },
    plusIcon: {
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
    },

    // Modal
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(72, 64, 74,0.4)'
    },
    modal: {
        height: heightDp(50),
        width: widthDp(70),
        // alignItems: 'center',
        backgroundColor: colors.white,
        paddingVertical: heightDp(2),
        paddingHorizontal: widthDp(2)
    },
    modalTitle:{
        fontSize:fontSize(20),
        alignSelf: 'center',
        textAlign: 'center'
    },
    nameInput: {
        height: heightDp(5),
        widthDp: widthDp(60),
        marginVertical: heightDp(2),
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.pinkish
    }
})