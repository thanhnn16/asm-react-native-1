import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import CalendarScreen from "../../components/BookingCalendar.tsx";
import { marginStyles, styles, textStyles } from "../../assets/styles/MyStyles.tsx";


const BookAppointment = () => {
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={[marginStyles.ph24, marginStyles.pv8]}>
        <Text style={[textStyles.h4, textStyles.bold]}>Chọn ngày</Text>
        <CalendarScreen />
      </View>
    </SafeAreaView>
  );
};

export default BookAppointment;
