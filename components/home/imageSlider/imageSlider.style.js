import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../../constants/index";

const styles = StyleSheet.create({

    locationWrapper: {
        alignItems: "center",
        width: 100,
        padding: 5,
    },
    locationName: {
        fontFamily: "extraBold",
        fontSize: SIZES.small,
        color: COLORS.primary,
    },

})

export default styles