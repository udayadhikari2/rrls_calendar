import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { COLORS } from '../../../constants'
import { FlatList } from 'react-native-gesture-handler'
import { CalenderMonths } from '../../../data/calenderMonths'
import { Ionicons } from "@expo/vector-icons"
import styles from "./Events.style";

const Events = ({ eventRef }) => {
    const renderItem = ({ item }) => {
        return (
            <ScrollView style={styles.cardContainer}>
                <Text style={styles.eventMonth}>{item.month} :</Text>
                {item.event.map((eventItem, index) => (
                    <View key={index}>
                        <View style={styles.tileContainer}>
                            <Text style={styles.eventName}>{eventItem.eventId} . {eventItem.eventName} on {eventItem.date}</Text>
                            <TouchableOpacity>
                                <Ionicons style={styles.fav} name="bookmarks-sharp" color={COLORS.lightGreen} size={30} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.eventDescription}>{eventItem.description}</Text>
                    </View>

                ))}
            </ScrollView>
        )
    }
    return (
        <View style={styles.eventContainer} >
            <Text style={styles.eventTitle}>Events</Text>
            <FlatList
                ref={eventRef}
                data={CalenderMonths}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem} />
        </View>
    )
}

export default Events