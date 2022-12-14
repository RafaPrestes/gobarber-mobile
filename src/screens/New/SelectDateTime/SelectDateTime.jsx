import React, { useState, useEffect } from 'react'
import Background from '../../../components/Background'
import DateInput from '../../../components/DateInput'

import api from '../../../services/api'

import { Container, HourList, Hour, Title } from './styles'

// recebendo o parametro da seleção do prestador ( route )
export function SelectDateTime({ navigation, route }) {
  const [date, setDate] = useState(new Date())
  const [hours, setHours] = useState([])

  // pegando os dados passados por parâmetro da tela anterior
  const provider = route.params.provider

  useEffect(() => {
    async function loadAvailable() {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        }
      });

      setHours(response.data)
    }
    loadAvailable();
  }, [date, provider.id])

  // função que recebe o value (time) do onPress de Hour e navega para a tela de confirmação, passando os dados do prestador e a data/horario como parâmetros
  function handleSelectHour(time) {
    navigation.navigate('confirm', {
      provider,
      time
    })
  }

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
        <HourList
          data={hours}
          extraData={date}
          keyExtractor={item => item.time}
          renderItem={({ item }) => (
            // no onPress do Hour está enviando a data/horário como parâmetro
            <Hour onPress={() => handleSelectHour(item.value)} enabled={item.available} disabled={item.available ? false : true}>
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  )
}