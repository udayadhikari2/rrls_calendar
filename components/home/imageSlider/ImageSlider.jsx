import { View, Text, TouchableOpacity } from 'react-native'
import styles from "./imageSlider.style"
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../../constants'
import Events from '../findingMonths/Events'
import { calenderMonths } from "../../../data/calenderMonths"
const ImageSlider = ({ data, sliderRef }) => {

    const imageUrls = calenderMonths.map((item) => item.calenderImage);

    return (
        <>
            <TouchableOpacity style={styles.imageWrapper}>
                <SliderBox images={imageUrls}
                    ref={sliderRef}
                    dotColor={COLORS.red}
                    ImageComponentStyle={{
                        borderRadius: 10,
                        width: "100%",
                        height: "100%",

                    }}
                    // onCurrentImagePressed={handleSnapToItem}
                    paginationBoxVerticalPadding={0}
                    resizeMode="stretch"
                    firstItem={data}
                />
            </TouchableOpacity>
            <Events />
        </>

    )
}
export default ImageSlider