import { View, Text, Platform } from 'react-native'
import React, { useContext, useState } from 'react'
import {Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText} from './styles'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contents/auth'

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin() {
  }

  return (
    <Background>
        <Container 
          behavior={Platform.OS === 'ios' ? 'padding' : ''}
          enabled
        >
            <Logo />
              <AreaInput>
                  <Input placeholder="Email"
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

                <SubmitButton onPress={handleLogin}>
                  <SubmitText> Acessar </SubmitText>
                </SubmitButton>

                <Link onPress={() => navigation.navigate('SignUp')}>
                  <LinkText>Criar uma conta</LinkText>
                </Link>
        </Container>
    </Background>
  )
}