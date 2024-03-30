import React, {Fragment, useCallback, useMemo, useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Calendar, CalendarUtils} from 'react-native-calendars';

const currentDay = new Date().toISOString().slice(0, 10);

const INITIAL_DATE = currentDay;

const CalendarScreen = () => {
  const [selected, setSelected] = useState(INITIAL_DATE);
  const [currentMonth, setCurrentMonth] = useState(INITIAL_DATE.slice(5, 7));
  const currentYear = new Date().getFullYear();

  const customHeaderProps: any = useRef();

  const setCustomHeaderNewMonth = (next = false) => {
    const add = next ? 1 : -1;
    const month = new Date(customHeaderProps?.current?.month);
    const newMonth = new Date(month.setMonth(month.getMonth() + add));
    customHeaderProps?.current?.addMonth(add);
    setCurrentMonth(newMonth.toISOString().slice(5, 7));
  };
  const moveNext = () => {
    setCustomHeaderNewMonth(true);
  };
  const movePrevious = () => {
    setCustomHeaderNewMonth(false);
  };

  const CustomHeader = React.forwardRef((props, ref) => {
    customHeaderProps.current = props;
    return (
      // @ts-expect-error
      <View ref={ref} {...props} style={styles.customHeader}>
        <Text>
          Tháng {currentMonth}, {currentYear}
        </Text>
        <TouchableOpacity onPress={movePrevious}>
          <Text>{'<<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={moveNext}>
          <Text>{'>>'}</Text>
        </TouchableOpacity>
      </View>
    );
  });

  const getDate = (count: number) => {
    const date = new Date(INITIAL_DATE);
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };

  const onDayPress = useCallback(day => {
    setSelected(day.dateString);
  }, []);

  const marked = useMemo(() => {
    return {
      [getDate(-1)]: {
        dotColor: 'red',
        marked: true,
      },
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: '#1C2A3A',
        selectedTextColor: 'white',
      },
    };
  }, [selected]);

  const renderCalendarWithSelectableDate = () => {
    return (
      <Fragment>
        <Calendar
          enableSwipeMonths
          current={INITIAL_DATE}
          style={styles.calendar}
          onDayPress={onDayPress}
          markedDates={marked}
          customHeader={CustomHeader}
        />
      </Fragment>
    );
  };

  const renderExamples = () => {
    return <Fragment>{renderCalendarWithSelectableDate()}</Fragment>;
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {renderExamples()}
    </ScrollView>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  switchText: {
    margin: 10,
    fontSize: 16,
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16,
    color: '#111928',
  },
  disabledText: {
    color: 'grey',
  },
  defaultText: {
    color: 'purple',
  },
  customCalendar: {
    height: 250,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  customDay: {
    textAlign: 'center',
  },
  customHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 0,
    padding: 8,
  },
  customTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  customTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00BBF2',
  },
});
