import { View, Text } from 'react-native'
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./home.style";
import { Profile, Location, Logo, FindingMonths, ImageSlider } from '../components/home';
function Home(props) {
    const [data, setData] = useState(0);

    const prev = () => {
        alert(data);
        setData(data - 1)
    }
    const next = () => {
        alert(data);
        if (data <= 12) {
            setData(data + 1)
        }
        else {
            alert(data)
        }
        alert(data);
    }

    return (
        <SafeAreaView style={styles.homeContainer}>
            <View style={styles.homeContainerWrapper}>
                <Location />
                <View style={styles.appTitle}>
                    <Logo />
                </View>
                <Profile />
            </View>
            <View style={styles.line} />
            <FindingMonths next={next} prev={prev} {...props} />
            <ImageSlider />
        </SafeAreaView>
    )
}
export default Home;