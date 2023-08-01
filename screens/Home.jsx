import { View, Text } from 'react-native'
import { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./home.style";
import { Profile, Location, Logo, FindingMonths, ImageSlider } from '../components/home';
import { calenderMonths } from '../data/calenderMonths';
function Home(props) {
    const sliderRef = useRef(null);
    const handleSnapToItem = (index) => {
        sliderRef.current?.scrollToIndex({ index, animated: true });
    };

    const imageId = calenderMonths.map((item) => item.id);
    const imageName = calenderMonths.map((item) => item.month);

    const [data, setData] = useState(0);
    const [monthName, setMonthName] = useState("Baishak");


    const prev = () => {
        handleSnapToItem();
        if (data >= 0 || data == imageId) {
            alert(data)
            setData(data - 1)
        }
        else {
            alert("You are in the starting month : Baishak")

        }
    }
    const next = () => {
        handleSnapToItem();
        if (data < 12) {
            setData(data + 1)
        }
        else {
            alert("You are in the Ending month : Chaitra")
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
            <FindingMonths next={next} prev={prev} {...props} monthName={monthName} />
            <ImageSlider data={data} imageRef={sliderRef} />
        </SafeAreaView>
    )
}
export default Home;