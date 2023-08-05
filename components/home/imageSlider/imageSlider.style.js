import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../../constants/index";
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  imageWrapper: {
    height: 300,
    elevation: 3,
    shadowColor: COLORS.tertiary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

  },
  calenderImage: {
    width: width,
    height: 300,
    resizeMode: "stretch",
  }
})

export default styles