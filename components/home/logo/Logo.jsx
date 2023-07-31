import { View, Text, Image, TouchableOpacity } from 'react-native'
import Styles from "./logo.style"
const Logo = () => {
    return (
        <TouchableOpacity style={Styles.imageContainer}>
            <Image source={require("../../../assets/images/x.png")} style={Styles.imageStyle} />
        </TouchableOpacity >
    )
}
export default Logo