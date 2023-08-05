import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import styles from "./imageSlider.style"
import Events from '../findingMonths/Events'
import { CalenderMonths } from '../../../data/calenderMonths'
const ImageSlider = ({ sliderRef, eventRef }) => {
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