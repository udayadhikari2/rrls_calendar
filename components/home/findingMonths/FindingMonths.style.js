import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../../constants/index";

const styles = StyleSheet.create({
    monthsContainer: {
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
        padding:3,
        // backgroundColor:COLORS.lightWhite,
        margin:0,
        borderRadius:10,
    },
    prevButton:{
        paddingHorizontal:30,
    },
    monthTitle:{
        flex:1,
        paddingVertical:2,
        backgroundColor:COLORS.lightGreen,
        borderWidth:2,
        borderRadius:10,
        borderColor:COLORS.gray1,
        alignItems:"center",
    },
    monthText:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        color:COLORS.primary,
        fontFamily:"bold",
        fontSize:SIZES.large,
    },
    nextButton:{
        paddingHorizontal:35,
    }
})
export default styles