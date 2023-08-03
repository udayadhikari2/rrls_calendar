import { StyleSheet,Dimensions } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../../constants/index";
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  imageWrapper: {
    height: 300,
  },
  calenderImage: {
    width: width,
    height: 300,
    resizeMode: "stretch",
  }
})

export default styles