import React, { useMemo, useState } from 'react'
import { DateTimePicker } from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt'

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText } from './styles'

export default function DateInput() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const dateFormatted = useMemo(() =>
    format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date])

  const onChange = (event, selectedDate) => {
    setDate(selectedDate)
  }

  const showDatePicker = () => {
    setShow(true)
  }

  // function handleOpenPicker() {
  //   setOpened(!opened)

  //   const {action, year, month, day} = DateTimePicker.open({
  //     mode: 'date',
  //     display: 'spinner',
  //   })
  //   if(action === DateTimePicker.dateSetAction){
  //     const selectedDate = new Date(year, month, day)
  //     onChange(selectedDate)
  //   }
  // }

  return (
    <Container>
      <DateButton onPress={showDatePicker}>
        <Icon name='event' color="#fff" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>
      <Container>
        {show && (
          <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode={'date'}
            is24Hour={true}
            onChange={onChange}
            display="default"
          />
        )}
      </Container>
    </Container>
  )
}