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
    const [buttonVisibleNext, setButtonVisibleNext] = useState(true);
    const [buttonVisiblePrev, setButtonVisiblePrev] = useState(false)

    const prev = () => {
        if (data == 0) {
            setButtonVisibleNext(true)
            setButtonVisiblePrev(false)
            alert("Permission Denied !!!")
        }
        else {
            setButtonVisibleNext(true)
            const prevIndex = data - 1;
            setData(prevIndex);
            sliderRef.current?.scrollToIndex({ index: prevIndex, animated: true });
            eventRef.current?.scrollToIndex({ index: prevIndex, animated: true });
        }
    }
    const next = () => {
        setButtonVisiblePrev(true)
        const nextIndex = data + 1;
        if (data == 0) {
            setData(nextIndex);
            sliderRef.current?.scrollToIndex({ index: nextIndex, animated: true });
            eventRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        }
        else if (nextIndex <= CalenderMonths.length - 1) {
            setData(nextIndex);
            sliderRef.current?.scrollToIndex({ index: nextIndex, animated: true });
            eventRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        }
        else if (data == CalenderMonths.length - 1) {
            setButtonVisibleNext(false)
            alert("Permission Denied !!!")
        }
        else {
            alert("disabled");
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
            <FindingMonths
                {...props}
                next={next} prev={prev}
                monthIndex={data}
                setButtonVisiblePrev={buttonVisiblePrev}
                setButtonVisibleNext={buttonVisibleNext}
                monthRef={sliderRef}

            />
            <ImageSlider
                imageRef={sliderRef}
                sliderRef={sliderRef}
                eventRef={eventRef}
            />
        </SafeAreaView>
    )
}
export default Home;