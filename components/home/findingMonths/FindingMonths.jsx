import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from "./FindingMonths.style";
import { COLORS, SIZES } from "../../../constants/index"
import { Ionicons } from "@expo/vector-icons"
import { useState, useEffect } from 'react';
const FindingMonths = ({ next, prev, monthIndex, setButtonVisiblePrev, setButtonVisibleNext, monthRef }) => {

  const [monthName, setMonthName] = useState()

  useEffect(() => {
    setMonthName(monthRef.current.props.data[monthIndex].month)
  }, [monthIndex]);


  const SearchData = () => {
    //searching function
  }

  return (
    <View style={styles.monthsContainer}>
      <Text style={styles.monthsHeading}>Find your desired</Text>
      <Text style={styles.MonthsTextStyle}>Months?</Text>
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder='Search the Month looking for.....'
          onChange={SearchData}
          placeholderTextColor={COLORS.gray2}
          editable
          color={COLORS.white}
          size={SIZES.xsMedium}
        />
        <TouchableOpacity style={styles.searchButton} disabled>
          <Ionicons
            name="search-circle"
            size={42}
            color={COLORS.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.nextPrevContainer}>
        {setButtonVisiblePrev ?
          <TouchableOpacity style={styles.prevButton} onPress={prev}>
            <Ionicons
              name="arrow-back-circle"
              size={30}
              color={COLORS.red}
            />
          </TouchableOpacity >
          :
          <TouchableOpacity style={styles.prevButton} onPress={prev} disabled>
            <Ionicons
              name="arrow-back-circle"
              size={30}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity >}

        <View style={styles.monthTitle}>
          <Text style={styles.monthText}>{monthName}</Text>
        </View>
        {setButtonVisibleNext ?
          <TouchableOpacity style={styles.nextButton} onPress={next}>
            <Ionicons
              name="arrow-forward-circle"
              size={30}
              color={COLORS.red}
            />
          </TouchableOpacity>
          :
          <TouchableOpacity style={styles.nextButton} onPress={next} disabled>
            <Ionicons
              name="arrow-forward-circle"
              size={30}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>}

      </View>
    </View>
  )
}
export default FindingMonths