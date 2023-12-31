import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { Ionicons } from "@expo/vector-icons"
import styles from "./profile.style"
const Profile = () => {
    return (
        <TouchableOpacity onPress={() => Alert.alert("Profile section is under maintainance ... !!!")}>
            <View style={styles.profile}>
                <Ionicons name="person-circle-outline" size={20} color="red" />
                <Text style={styles.profileTitle}>
                    This is the profile section.
                </Text>
            </View>
        </TouchableOpacity>
    )
}
export default Profile