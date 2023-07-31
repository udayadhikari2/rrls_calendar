import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from "./FindingMonths.style";
import { COLORS, SIZES } from "../../../constants/index"
import { Ionicons } from "@expo/vector-icons"
const FindingMonths = () => {

  const SearchData = () => {

  }

  return (
    <View style={styles.monthsContainer}>
      <Text style={styles.monthsHeading}>Find your desired</Text>
      <Text style={styles.MonthsTextStyle}>Months?</Text>
      <View style={styles.searchInputContainer}>
        <TextInput style={styles.searchInput} placeholder='Search the Month looking for.....' onChange={SearchData} placeholderTextColor={COLORS.gray2} editable color={COLORS.white} size={SIZES.xsMedium} />
        <TouchableOpacity style={styles.searchButton} disabled>
          <Ionicons name="search-circle" size={42} color={COLORS.white}></Ionicons>
        </TouchableOpacity>
      </View>
      <View style={styles.nextPrevContainer}>
        <TouchableOpacity style={styles.prevButton}>
          <Ionicons name="arrow-back-circle" size={30} color={COLORS.red} />
        </TouchableOpacity >
        <View style={styles.monthTitle}>
          <Text style={styles.monthText}>Baishak</Text>
        </View>
        <TouchableOpacity style={styles.nextButton}>
          <Ionicons name="arrow-forward-circle" size={30} color={COLORS.red} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default FindingMonths