import React, { useState, useEffect } from 'react'
import Background from '../../../components/Background'
import DateInput from '../../../components/DateInput'

import api from '../../../services/api'

import { Container, HourList, Hour, Title } from './styles'


export function SelectDateTime({ navigation, route }) {
  const [date, setDate] = useState(new Date())
  const [hours, setHours] = useState([])

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
  } ,[date, provider.id])

  function handleSelectHour(time) {
    navigation.navigate('confirm', {
      provider,
      time
    })
  }
  
  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate}/>
        <HourList 
        data={hours} 
        extraData={date}
        keyExtractor={item => item.time}
        renderItem={({ item }) => (
          <Hour onPress={() => handleSelectHour(item.value)} enabled={item.available}>       
            <Title>{item.time}</Title>
          </Hour>
        )}
        />
      </Container>
    </Background>
  )
}