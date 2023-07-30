import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./home.style";
import { Ionicons } from "@expo/vector-icons";
// import {  } from 'react-native-gesture-handler';
import { Alert, TouchableOpacity } from 'react-native';
function Home() {
    return (
        <SafeAreaView style={styles.homeContainer}>
            <View style={styles.homeContainerWrapper}>

                <TouchableOpacity style={styles.locationWrapper}>
                    <View style={styles.location}>
                        <Ionicons name="location-outline" size={24} />
                    </View>
                    <Text style={styles.locationName}>Bharatpur</Text>
                </TouchableOpacity>
                <View style={styles.appTitle}>
                    <Text style={styles.textStyle}>
                        Logo
                    </Text>
                </View>

                <TouchableOpacity onPress={() => Alert.alert("Profile section")}>
                    <View style={styles.profile}>
                        <Ionicons style={styles.profileAvatar} name="person-circle-outline" size={30} color="red" />
                        <Text style={styles.profileTitle}>
                            Uday Adhikari
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
            <View style={styles.line} />
        </SafeAreaView>
    )
}
export default Home;