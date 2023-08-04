import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from "./FindingMonths.style";
import { COLORS, SIZES } from "../../../constants/index"
import { Ionicons } from "@expo/vector-icons"
import { useState } from 'react';
const FindingMonths = ({ next, prev, monthIndex, setButtonVisible }) => {

  // const [montName, setMontName] = useState({ montName })

  const SearchData = () => {
    //searching function
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
        {setButtonVisible ? "" : <TouchableOpacity  style={styles.prevButton} onPress={prev}>
          <Ionicons name="arrow-back-circle" size={30} color={COLORS.red} />
        </TouchableOpacity >}

        <View style={styles.monthTitle}>
          <Text style={styles.monthText}>{monthIndex}</Text>
        </View>
        {setButtonVisible ? <TouchableOpacity style={styles.nextButton} onPress={next}>
          <Ionicons name="arrow-forward-circle" size={30} color={COLORS.red} />
        </TouchableOpacity> : ""}

      </View>
    </View>
  )
}
export default FindingMonths