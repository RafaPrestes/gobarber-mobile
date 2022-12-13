import React, { useMemo } from 'react'
import { parseISO, formatRelative, subHours, format } from 'date-fns'
import pt from 'date-fns/locale/pt'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Left, Avatar, Info, Name, Time, SubmitButton } from './styles'

export default function Appointments({ data, onCancel }) {

  const date = new Date(data.date)
  // Subtrai 3 horas da data
  const newDate = subHours(date, 3)

  // Converte a data para uma string no formato ISO 8601
  const isoString = format(newDate, "yyyy-MM-dd'T'HH:mm:ssxxx");

  // Formata a data com o formatRelative
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(isoString), new Date(), {
      locale: pt,
      addSuffix: true,
    })
  }, [data.date])

  return (
    <Container past={data.past}>
      <Left>
        <Avatar source={{ uri: data.provider.avatar ? data.provider.avatar.url : 'https://www.w3schools.com/w3images/avatar2.png' }} />
        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>

      <TouchableOpacity past={data.past} onPress={onCancel} disabled={data.past ? true : false}>
        <Icon name='event-busy' size={20} color='#f64c75' />
      </TouchableOpacity>


    </Container>
  )
}