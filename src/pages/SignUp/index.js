import {Platform } from 'react-native'
import React, { useState } from 'react'
import {Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText} from '../SignIn/styles'
import { useContext } from 'react'
import { AuthContext } from '../../contents/auth'


export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nome, setNome] = useState('')


  return (
    <Background>
        <Container 
          behavior={Platform.OS === 'ios' ? 'padding' : ''}
          enabled
        >
              <AreaInput>
                  <Input placeholder="Nome"
                  autoCorrect={false}
                  autoCapitalize="none"
                  value={nome}
                  onChangeText={(text) => setNome(text)}
                  />
              </AreaInput>

              <AreaInput>
                  <Input placeholder="email"
                  autoCorrect={false}
                  autoCapitalize="none"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  />
              </AreaInput>

              <AreaInput>
                  <Input placeholder="Password"
                  autoCorrect={false}
                  autoCapitalize="none"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  />
              </AreaInput>

                <SubmitButton>
                  <SubmitText> Cadastrar </SubmitText>
                </SubmitButton>
        </Container>
    </Background>
  )
}