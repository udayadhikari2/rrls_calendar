import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../../constants/index";

const styles = StyleSheet.create({
    monthsContainer: {
        flex: 1,
        marginHorizontal:15,
    },
    monthsHeading: {
        fontFamily: "extraBold",
        fontSize: SIZES.large +12,
        color: COLORS.primary,
        
    },
    MonthsTextStyle:{
        fontFamily: "extraBold",
        fontSize: SIZES.large +12,
        color: COLORS.tertiary,
        lineHeight:35,
        paddingBottom:5,
    },
    searchInputContainer:{
        flexDirection:"row",
        justifyContent:"center",
    },
    searchInput:{
        width:'100%',
        borderWidth:1,
        borderRadius:10,
        backgroundColor:COLORS.primary ,
        paddingHorizontal:15,
        paddingVertical:10,
        borderColor:COLORS.lightWhite,
    },
    searchButton:{
        position:"absolute",
        right:0,
        alignItems:"center",
    },
    nextPrevContainer:{
        flexDirection:"row",
        justifyContent:"center",
        marginVertical:10,
        padding:5,
    },
    prevButton:{
        paddingHorizontal:30,
    },
    monthTitle:{
        paddingHorizontal:30,
        paddingVertical:2,
        backgroundColor:COLORS.gray1,
        borderWidth:1,
        borderRadius:20,
        borderColor:COLORS.lightWhite,
        justifyContent:"center",
    },
    monthText:{
        color:COLORS.primary,
        fontFamily:"bold",
        fontSize:SIZES.large,
    },
    nextButton:{
        paddingHorizontal:30,
    }
})
export default styles