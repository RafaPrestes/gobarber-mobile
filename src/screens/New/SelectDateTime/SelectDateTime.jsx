import React from 'react'
import { useState } from 'react'
import Background from '../../../components/Background'
import DateInput from '../../../components/DateInput'

import { Container } from './styles'

export function SelectDateTime() {
  const [date, setDate] = useState(new Date())
  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate}/>
      </Container>
    </Background>
  )
}