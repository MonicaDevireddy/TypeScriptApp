import { StyleSheet } from "react-native";
import colors from "../globalConstants/colors";
import { fontSize, heightDp, widthDp } from "../globalConstants/dimensions";

export const styles = StyleSheet.create({
    card: {
        width: widthDp(96),
        height: heightDp(12),
        backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: heightDp(1),
        paddingHorizontal: widthDp(2),
        marginVertical: heightDp(1),
        shadowColor: colors.pinkish,
        shadowOffset: {
            height: heightDp(0.5),
            width: widthDp(1)
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        backgroundColor: colors.white,
        borderRadius: widthDp(2),
        borderWidth: StyleSheet.hairlineWidth / 2,
        borderColor: colors.pinkish
    },
    nameText:{
        fontSize: fontSize(25),
        fontWeight: 'bold',
        color: colors.pink,
    },
    dateTimeContainer:{
        width: widthDp('80'),
        flexDirection: 'row',
        marginTop: heightDp(1)
    },
    dateText:{
        fontSize: fontSize(20),
        marginHorizontal: widthDp(2),
    },
    deleteIcon:{
        marginRight: widthDp(3)
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
        height: heightDp(30),
        width: widthDp(70),
        backgroundColor: colors.white,
        paddingVertical: heightDp(2),
        paddingHorizontal: widthDp(2)
    },
    modalTitle: {
        fontSize: fontSize(20),
        alignSelf: 'center',
        textAlign: 'center',
        marginVertical: heightDp(2)
    },
    nameContainer: {
        width: widthDp(66),
        flexDirection: 'row',
        marginVertical: heightDp(1),
    },
    bellIcon: {
        alignSelf: 'center',
        marginHorizontal: widthDp(1.5)
    },
    nameInput: {
        width: widthDp(56),
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.pinkish,
        paddingHorizontal: widthDp(1)
    },
    inputText: {
        textAlign: 'left',
        fontSize: fontSize(15)
    },
    datePicker: {
        width: widthDp(33),
    },
    timerIcon: {
        position: 'absolute',
        left: widthDp(1)
    },
    dateIcon: {
        position: 'absolute',
        left: 0
    },
    dateInput: {
        borderWidth: 0,
        marginLeft: widthDp(10),
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    pickerRow:{
        flexDirection: 'row',
        marginVertical: heightDp(1)
    },
    buttonStyles:{
        width: widthDp(66),
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: heightDp(3)
    },
})