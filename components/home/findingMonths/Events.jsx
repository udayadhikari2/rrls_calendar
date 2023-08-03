import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import { COLORS } from '../../../constants'
import { FlatList } from 'react-native-gesture-handler'
import { CalenderMonths } from '../../../data/calenderMonths'
import { Ionicons } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native'
const Events = () => {
    return (
        <View>
            <View style={styles.eventContainer}>
                <Text style={styles.eventTitle}>Events</Text>
            </View>
            <FlatList data={CalenderMonths} renderItem={({ item }) => {
                console.log(item)
                return (
                    <View style={styles.cardContainer}>
                        <View style={styles.tileContainer}>
                            <Text style={styles.eventName}>Nepali Typing on 24th</Text>
                            <TouchableOpacity><Ionicons style={styles.fav} name="bookmarks-sharp" color={COLORS.lightGreen} size={30} /></TouchableOpacity>


                        </View>

                        <Text style={styles.eventDescription}>for class 12</Text>
                    </View>
                )
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    eventContainer: {
        marginTop: 10,
        marginHorizontal: 15,
    },
    eventTitle: {
        fontFamily: "extraBold",
        fontSize: 20,
        color: COLORS.red,
    },
    cardContainer: {
        backgroundColor: COLORS.secondary,
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    eventName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
        color: COLORS.tertiary,
    },
    eventTime: {
        fontSize: 16,
        marginBottom: 4,
        fontFamily: "italic",
    },
    eventDescription: {
        fontSize: 16,
    },
    tileContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    fav: {
        margin: 10,
        padding: 10,

    }
})

export default Events