import { Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import logo from '../../assets/logo.png'
import Background from '../../components/Background'

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles'
import { signInRequest } from '../../store/modules/auth/actions'

export function Login({ navigation }) {
  // hooks
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // functions
  function handleSubmit() {
    dispatch(signInRequest(email, password))
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-adress"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            returnKeyType="send"
            ref={passwordRef}
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
        </Form>

        <SignLink onPress={() => { navigation.navigate('register') }}>
          <SignLinkText>Criar conta gratuíta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  )
}
