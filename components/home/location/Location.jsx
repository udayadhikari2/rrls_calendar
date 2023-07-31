import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from "@expo/vector-icons"
import styles from "./location.style"
const Location = () => {
    return (
        <TouchableOpacity style={styles.locationWrapper}>
            <View style={styles.location}>
                <Ionicons name="location-outline" size={24} />
            </View>
            <Text style={styles.locationName}>Bharatpur</Text>
        </TouchableOpacity>
    )
}
export default Location