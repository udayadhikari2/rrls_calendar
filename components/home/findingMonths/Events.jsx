import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import { COLORS } from '../../../constants'
const Events = () => {
    return (
        <View style={styles.eventContainer}>
            <Text style={styles.eventTitle}>Events</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    eventContainer:{
        margin:10,
    },
    eventTitle:{
        fontFamily:"extraBold",
        fontSize:20,
        color:COLORS.red,
    }
})

export default Events