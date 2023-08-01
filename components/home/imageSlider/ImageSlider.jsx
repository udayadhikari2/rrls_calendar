import { View, Text, TouchableOpacity } from 'react-native'
import styles from "./imageSlider.style"
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../../constants'
import { useState } from 'react'
import Events from '../findingMonths/Events'
const ImageSlider = () => {
    const calendarData = [
        require("../../../assets/images/baishak.jpg"),
        require("../../../assets/images/jestha.jpg"),
        require("../../../assets/images/ashar.jpg"),
        require("../../../assets/images/shrawn.jpg"),
        require("../../../assets/images/bhadra.jpg"),
        require("../../../assets/images/ashoj.jpg"),
        require("../../../assets/images/kartik.jpg"),
        require("../../../assets/images/mangsir.jpg"),
        require("../../../assets/images/poush.jpg"),
        require("../../../assets/images/magh.jpg"),
        require("../../../assets/images/falgun.jpg"),
        require("../../../assets/images/chaitra.jpg"),
    ]
    const [monthIndex, setMonthIndex] = useState(0);
    const [nextPrev,setNextPrev]=useState(monthIndex);
    const next=()=>{
        if(nextPrev==true){
            nextPrev++;
            
        }
    }
    const assignIndex = (index) => {
        setMonthIndex(index);
        alert(index);
    }

    return (
        <>
            <TouchableOpacity style={styles.imageWrapper}>
                <SliderBox images={calendarData}
                    dot={false}
                    dotColor={COLORS.red}
                    ImageComponentStyle={{
                        borderRadius: 10,
                        width: "100%",
                        height: "100%",
                       
                    }}
                    onCurrentImagePressed={(index) => assignIndex(index)}
                    paginationBoxVerticalPadding={0}
                    resizeMode="stretch"
                    // firstItem={index}
                />
            </TouchableOpacity>
            <Events />
        </>

    )
}
export default ImageSlider