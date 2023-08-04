import { Dimensions, StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import { COLORS, SIZES } from '../../../constants'
import { FlatList } from 'react-native-gesture-handler'
import { CalenderMonths } from '../../../data/calenderMonths'
import { Ionicons } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native'
const { width } = Dimensions.get('window');
const Events = ({ eventRef }) => {
    return (
        <View style={styles.eventContainer} >
            <View >
                <Text style={styles.eventTitle}>Events</Text>
            </View>
            <FlatList ref={eventRef} data={CalenderMonths} horizontal pagingEnabled showsHorizontalScrollIndicator={false} renderItem={({ item }) => {
                return (
                    <View style={styles.cardContainer}>
                        <Text style={styles.eventMonth}>{item.month} :</Text>
                        <View style={styles.tileContainer}>
                            <Text style={styles.eventName}>{item.event1.eventName} on {item.event1.date}</Text>
                            <TouchableOpacity>
                                <Ionicons style={styles.fav} name="bookmarks-sharp" color={COLORS.lightGreen} size={30} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.eventDescription}>{item.event1.description}</Text>
                    </View>
                )
            }} />
        </View>
    )
}
const styles = StyleSheet.create({
    eventTitle: {
        fontFamily: "extraBold",
        fontSize: SIZES.large + 5,
        color: COLORS.red,
        marginHorizontal: 15,
        marginVertical: 8,
    },
    cardContainer: {
        width: width,
        backgroundColor: COLORS.secondary,
        borderRadius: 8,
        padding: 10,
        marginVertical: 5,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    eventMonth: {
        color: COLORS.gray1,
        fontSize: SIZES.large,
        fontFamily: 'extraBold',
    },
    eventName: {
        fontSize: SIZES.medium + 2,
        fontWeight: 'bold',
        marginBottom: 4,
        paddingHorizontal: 15,
        color: COLORS.tertiary,
    },
    eventDescription: {
        fontSize: 16,
        paddingHorizontal: 15,
    },
    tileContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    }
})

export default Events