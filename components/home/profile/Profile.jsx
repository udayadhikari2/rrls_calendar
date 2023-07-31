import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { Ionicons } from "@expo/vector-icons"
import styles from "./profile.style"
const Profile = () => {
    return (
        <TouchableOpacity onPress={() => Alert.alert("Profile section")}>
            <View style={styles.profile}>
                <Ionicons name="person-circle-outline" size={20} color="red" />
                <Text style={styles.profileTitle}>
                    Uday Adhikari
                </Text>
            </View>
        </TouchableOpacity>
    )
}
export default Profile