import { View, Text } from 'react-native'
import { useRef, useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./home.style";
import { Profile, Location, Logo, FindingMonths, ImageSlider } from '../components/home';
import { CalenderMonths } from '../data/calenderMonths';
function Home(props) {
    const sliderRef = useRef(null);
    const eventRef = useRef(null);

    const [data, setData] = useState(0);
    const [buttonVisible, setButtonVisible] = useState(true)

    const prev = () => {
        if (data == 0) {
            alert("Base Months")
            setButtonVisible(false)
        }
        else {
            const prevIndex = data - 1;
            setData(prevIndex);
            sliderRef.current?.scrollToIndex({ index: prevIndex, animated: true });
            eventRef.current?.scrollToIndex({ index: prevIndex, animated: true });
        }
    }
    const next = () => {
        const nextIndex = data + 1;
        if (data == 0) {
            setData(nextIndex);
            sliderRef.current?.scrollToIndex({ index: nextIndex, animated: true });
            eventRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        }
        else if (nextIndex <= CalenderMonths.length - 1) {
            setData(nextIndex);
            setButtonVisible(false)
            sliderRef.current?.scrollToIndex({ index: nextIndex, animated: true });
            eventRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        }
        else {
            alert("The Last Month is Chaitra");
        }
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
            <FindingMonths next={next} prev={prev} {...props} monthIndex={data} setButtonVisible={buttonVisible} />
            <ImageSlider imageRef={sliderRef} sliderRef={sliderRef} eventRef={eventRef} />
        </SafeAreaView>
    )
}
export default Home;