import React, { useMemo, useState } from 'react'
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
// import { DateTimePickerAndroid } from 'react-native-date-time-picker-android';
import { format, set } from 'date-fns';
import pt from 'date-fns/locale/pt'

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText } from './styles'
import { Platform } from 'react-native';

export default function DateInput({ date, onChange}) {
  const [datePicker, setDatePicker] = useState(false);

  function showDatePicker() {
    setDatePicker(true)
  }

  function onDateSelected(event, value) {
    onChange(value)
    setDatePicker(false)
  } 

  const dateFormatted = useMemo(() =>
    format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date])

  return (
    <Container>
      {datePicker && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          minimumDate={new Date()}
          minuteInterval={30}
          onChange={onDateSelected}
        />
      )}

      {!datePicker && (
        <DateButton onPress={showDatePicker}>
          <Icon name='event' color="#fff" size={20} />
          <DateText>{dateFormatted}</DateText>
        </DateButton>      
      )} 
    </Container>
  )
}