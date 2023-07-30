import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../constants/index";
import { height, width } from "../constants/theme";

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
    locationWrapper: {
        alignItems: "center",
        width: 100,
        padding: 5,
    },
    locationName: {
        fontFamily: "extraBold",
        fontSize: SIZES.medium,
        color: COLORS.primary,
    },
    appTitle: {
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
    },
    textStyle: {
        fontFamily: "extraBold",
        fontSize: SIZES.large,
    },
    profile: {
        padding: 1,
        alignItems: "center",
        width: 100,
    },
    profileTitle: {
        fontSize: SIZES.xsMedium,
        fontFamily: "semiBold",
        color: COLORS.tertiary,
    },
    line: {
        borderBottomWidth: 1,
        borderColor: COLORS.dimWhite,
        marginVertical: 5,
        marginHorizontal: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
})

export default styles