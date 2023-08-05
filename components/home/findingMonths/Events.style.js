import { StyleSheet, Dimensions } from "react-native";
import { SIZES, COLORS } from "../../../constants/index";
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    eventContainer: {
        margin: 0,
        padding: 0,
    },
    eventTitle: {
        // flex:1,
        fontFamily: "bold",
        fontSize: SIZES.large,
        color: COLORS.red,
        marginHorizontal: 15,
        paddingTop: 5,

    },
    cardContainer: {
        // borderWidth:2,
        width: width,
        backgroundColor: COLORS.lightGreen,
        opacity:0.8,
        borderRadius: 8,
        padding: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    eventMonth: {
        color: COLORS.gray1,
        fontSize: SIZES.large,
        fontFamily: 'extraBold',
    },
    eventName: {
        fontSize: SIZES.medium + 2,
        fontWeight: 'bold',
        marginBottom: 4,
        paddingHorizontal: 15,
        color: COLORS.tertiary,
    },
    eventDescription: {
        fontSize: 16,
        paddingHorizontal: 15,
    },
    tileContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    }
})
export default styles