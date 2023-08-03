import { View, Text } from 'react-native'
import { useRef, useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./home.style";
import { Profile, Location, Logo, FindingMonths, ImageSlider } from '../components/home';
import { CalenderMonths } from '../data/calenderMonths';
function Home(props) {
    const sliderRef = useRef(null);
    // const upButtonHandler = () => {
    //     //OnCLick of Up button we scrolled the list to top
    //     sliderRef.current.scrollToOffset({ offset: 0, animated: true });
    // };

    // const downButtonHandler = () => {
    //     //OnCLick of down button we scrolled the list to bottom
    //     sliderRef.scrollToEnd({ animated: true });
    // };

    const [data, setData] = useState(0);

    const [monthName, setMonthName] = useState("Baishak");

    const prev = () => {
        // alert(calenderMonths.length)
        const prevIndex = data - 1;
        if (prevIndex >= 0) {
            setData(prevIndex);
            sliderRef.current?.scrollToIndex({ index: data, animated: true });
        }
        else {
            alert("The First Month is Baishak");
        }
    }
    const next = () => {
        const nextIndex = data + 1;  // 0+1 = 1 
        do {
            setData(nextIndex);
            sliderRef.current?.scrollToIndex({ index: data, animated: true });
        }
        while (nextIndex <= CalenderMonths.length);
        // alert("The Last Month is Chaitra");



        // if (data == 0) {
        //     setData(nextIndex);
        //     sliderRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        // }
        // else if (nextIndex <= CalenderMonths.length) {
        //     setData(nextIndex);
        //     sliderRef.current?.scrollToIndex({ index: data, animated: true });
        // }
        // else {
        //     alert("The Last Month is Chaitra");
        // }
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
            <ImageSlider imageRef={sliderRef} sliderRef={sliderRef} />
        </SafeAreaView>
    )
}
export default Home;