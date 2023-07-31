import { View, Text, StyleSheet } from 'react-native'
import styles from "./FindingMonths.style";
const FindingMonths = () => {
  return (
    <View style={styles.monthsContainer}>
      <Text style={styles.monthsTitle}>Find your desired {'\n'} Months?</Text>
    </View>
  )
}
export default FindingMonths