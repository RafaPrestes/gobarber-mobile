import React, { useMemo } from 'react'
import { formatRelative, parseISO, subHours, format } from 'date-fns'

import Background from '../../../components/Background'
import pt from 'date-fns/locale/pt'

import api from '../../../services/api'

import { Container, Avatar, Name, Time, SubmitButton } from './styles'

// recebendo o parametro da seleção de data/hora ( route )
export function Confirm({ route, navigation }) {

  // pegando os dados passados por parâmetro da tela anterior
  const provider = route.params.provider
  const time = route.params.time

  const date = new Date(time);
  // Subtrai 3 horas da data
  const newDate = subHours(date, 3);

  // Converte a data para uma string no formato ISO 8601
  const isoString = format(newDate, "yyyy-MM-dd'T'HH:mm:ssxxx");

  // Formata a data com o formatRelative
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(isoString), new Date(), {
      locale: pt,
      addSuffix: true,
    })
  }, [time])

  // função que envia pro banco o id do prestador e o horário do agendamento
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