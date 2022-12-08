import React,{ useEffect, useState } from 'react'
import Background from '../../../components/Background'

import api from '../../../services/api'

import { Container, ProvidersList, Provider, Avatar, Name } from './styles.js'

export function SelectProvider( { navigation }) {
  const [providers, setProviders] = useState([])

  useEffect(() => {
    async function loadProviders(){
      const response = await api.get('providers')

      setProviders(response.data)
    }
    loadProviders();
  }, [])

  return (
    <Background>
      <Container>
        <ProvidersList 
          data={providers}
          keyExtractor={provider => String(provider.id)}
          renderItem={({ item: provider }) => (
            <Provider onPress={() => navigation.navigate('selectDateTime', { provider }) }>
              <Avatar source={{ uri: provider.avatar ? provider.avatar.url : 'https://www.w3schools.com/w3images/avatar2.png' }} />
              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>

  )
}