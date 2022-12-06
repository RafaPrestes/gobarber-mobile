import React, { useMemo } from 'react'
import { parseISO, formatRelative } from 'date-fns'
import pt from 'date-fns/locale/pt'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Left, Avatar, Info, Name, Time, SubmitButton } from './styles'

export default function Appointments({ data, onCancel }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
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
      {!data.canceled_at && (
        <TouchableOpacity past={data.past} onPress={onCancel}>
          <Icon name='event-busy' size={20} color='#f64c75' />
        </TouchableOpacity>
      )}
        
    </Container>
  )
}