import { Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 14,
    xsMedium: 16,
    large: 20,
    height,
    width,
};

const COLORS = {
    primary: "#2A4D50",
    secondary: "#DDF0FF",
    tertiary: "#FF7754",

    gray1: "#83829A",
    gray2: "#C1C0C8",

    dimWhite: "#F5F5F5",
    white: "#FFFFFF",
    black: "#000000",
    red: "#e81e4d",
    green: " #00C135",
    lightGreen: "#9AE0AD",
    yellow: "#FFFB00",
    blue: "#003BFF",
    lightWhite: "#E0E1E4",
};

const SHADOWS = {
    small: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    medium: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
    },
};

export { SIZES, COLORS, SHADOWS };