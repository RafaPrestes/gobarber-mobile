import React, { useMemo } from 'react'
import { formatRelative, parseISO } from 'date-fns'

import Background from '../../../components/Background'
import pt from 'date-fns/locale/pt'

import api from '../../../services/api'

import {Container, Avatar, Name, Time, SubmitButton} from './styles'

export function Confirm({route, navigation}) {
  const provider = route.params.provider
  const time = route.params.time

  // const dateFormatted = useMemo(() => {
  //   formatRelative(parseISO(time), new Date(), { locale: pt })
  // } , [time])

  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(time), new Date(), {
      locale: pt,
      addSuffix: true,
    }) 
  }, [time])

  console.log(time)

  
  async function handleAddAppointment() {
    await api.post('appointments', {
      provider_id: provider.id,
      date: time,
    });

    navigation.navigate('dashboard')
  }

  return (
    <Background>
      <Container> 
      <Avatar source={{ uri: provider.avatar ? provider.avatar.url : 'https://www.w3schools.com/w3images/avatar2.png' }} />
      <Name>{provider.name}</Name>
      <Time>{dateParsed}</Time>
      <SubmitButton onPress={handleAddAppointment}>Confirmar Agendamento</SubmitButton>
      </Container>
    </Background>
  )
}