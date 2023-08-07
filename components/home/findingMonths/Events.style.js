import { StyleSheet, Dimensions } from "react-native";
import { SIZES, COLORS } from "../../../constants/index";
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    eventContainer: {
        margin: 0,
        padding: 0,
        flexDirection:"column",
    },
    eventTitle: {
        // flex:1,
        width:width,
        fontFamily: "bold",
        fontSize: SIZES.large,
        color: COLORS.red,
        marginHorizontal: 10,
        paddingTop: 5,

    },
    cardContainer: {
        // borderWidth:2,
        height:165,
        width: width,
        backgroundColor: COLORS.lightGreen,
        opacity:0.8,
        // borderRadius: 8,
        paddingHorizontal: 10,   
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    eventMonth: {
        color: COLORS.primary,
        fontSize: SIZES.large,
        fontFamily: 'extraBold',
    },
    eventName: {
        fontSize: SIZES.medium + 2,
        fontWeight: 'bold',
        marginBottom: 4,
        // paddingHorizontal: 15,
        
    },
    eventDescription: {
        fontSize: 16,
        paddingHorizontal: 20,
        margin:0,
        color: COLORS.tertiary,
    },
    tileContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
       
    },
    fav:{
        marginHorizontal:15,
    }
})
export default styles