import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import styles from "./imageSlider.style"
import Events from '../findingMonths/Events'
import { CalenderMonths } from '../../../data/calenderMonths'
const ImageSlider = ({ sliderRef, eventRef }) => {

    // const [currentIndex, setCurrentIndex] = useState(0);
    // const itemWidth = Dimensions.get('window').width - 32;
    // const handelScroll = (event) => {
    //     const contentOffsetY = event.nativeEvent.contentOffset.y;
    //     const index = Math.round(contentOffsetY / itemWidth);
    //     setCurrentIndex(index);
    // }
    return (
        <>
            <View style={styles.imageWrapper}>
                <FlatList
                    ref={sliderRef}
                    data={CalenderMonths}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.calenderStyle}>
                                <Image source={item.calenderImage} style={styles.calenderImage} />
                            </View>
                        )
                    }
                    }
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                />
            </View>
            <Events eventRef={eventRef} />
        </>

    )
}
export default ImageSlider