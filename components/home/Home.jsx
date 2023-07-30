import { View, Text, StyleSheet } from 'react-native'
import { Styles } from "./home.style";
const Home = () => {
  return (
    <View style={Styles.monthsContainer}>
      <Text style={Styles.monthsTitile}>Find your Months?</Text>
    </View>
  )
}
export default Home