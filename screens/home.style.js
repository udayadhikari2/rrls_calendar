import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../constants/index";

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: COLORS.gray2,
    },
    homeContainerWrapper: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 10,
        alignItems: "center",
        // padding: 5,
    },
    line: {
        borderBottomWidth: 1,
        borderColor: COLORS.dimWhite,
        marginTop: 35,
        marginHorizontal: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
})

export default styles