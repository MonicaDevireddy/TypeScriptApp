import { StyleSheet } from "react-native";
import colors from "../globalConstants/colors";
import { fontSize, heightDp, widthDp } from "../globalConstants/dimensions";

export const styles = StyleSheet.create({
    card: {
        width: widthDp(96),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        borderRadius: widthDp(1),
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.pinkish,
        paddingVertical: heightDp(1),
        elevation: 5
    },
    none:{
        backgroundColor: 'white'
    },
    nameText:{
        fontSize: fontSize(25),
        fontWeight: 'bold',
        color: colors.pink,
    },
    dateTimeContainer:{
        width: widthDp('80'),
        flexDirection: 'row',
        marginTop: heightDp(1),
        alignItems: 'center'
    },
    dateText:{
        fontSize: fontSize(20),
        marginHorizontal: widthDp(2),
    },
    deleteIcon:{
        marginRight: widthDp(3),
    },

    //PlusIcon
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
        // height: heightDp(30),
        width: widthDp(70),
        backgroundColor: colors.white,
        paddingVertical: heightDp(2),
        paddingHorizontal: widthDp(2),
        alignItems: 'center'
    },
    modalTitle: {
        fontSize: fontSize(20),
        alignSelf: 'center',
        textAlign: 'center',
        marginVertical: heightDp(2)
    },
    row: {
        width: widthDp(66),
        flexDirection: 'row',
        marginVertical: heightDp(1),
        alignItems: 'center',
    },
    nameInput: {
        width: widthDp(59),
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
    dateInput:{
        fontSize: fontSize(15),
        marginHorizontal: widthDp(1.5)
    },   
    buttonStyles:{
        width: widthDp(66),
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: heightDp(3)
    },
})