import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../../constants/index";


const styles = StyleSheet.create({

    profile: {
        padding: 1,
        alignItems: "center",
        width: 100,
    },
    profileTitle: {
        fontSize: SIZES.small,
        fontFamily: "semiBold",
        color: COLORS.tertiary,
    },

})

export default styles