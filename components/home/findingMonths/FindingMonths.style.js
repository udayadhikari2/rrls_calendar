import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../../constants/index";

const styles = StyleSheet.create({
    monthsContainer: {
        flex: 1,
        marginHorizontal:15,
    },
    monthsTitle: {
       
        fontFamily: "extraBold",
        fontSize: SIZES.large +12,
        color: COLORS.primary,
    }
})
export default styles