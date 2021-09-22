import Link from 'next/link'

import { Twitter as TwitterIcon } from '@styled-icons/boxicons-logos/Twitter'
import { Google as GoogleIcon } from '@styled-icons/boxicons-logos/Google'
import { Apple as AppleIcon } from '@styled-icons/boxicons-logos/Apple'

import { Email } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'
import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import {
  ContentOpenForm,
  FormWrapperContent,
  FormLink,
  InfluenciLink,
  LoginSocial
} from 'components/Form'
import * as S from './styles'

const FormSignUp = () => {
  return (
    <FormWrapperContent>
      <LoginSocial>
        <Button minimal icon={<TwitterIcon />} />
        <Button minimal icon={<GoogleIcon />} />
        <Button minimal icon={<AppleIcon />} />
      </LoginSocial>
      <ContentOpenForm>
        <Heading color="black" size="small" lineColor="primary">
          Ou por email
        </Heading>
      </ContentOpenForm>

      <form>
        <TextField
          name="email"
          type="email"
          placeholder="Digite seu melhor Email"
          icon={<Email />}
        />
        <FormLink>
          já tem uma conta?
          <Link href="/sign-in">
            <a> Entrar</a>
          </Link>
        </FormLink>
        <Button size="large" fullWidth>
          Sign up
        </Button>
      </form>

      <S.Terms>
        <Checkbox
          name="category"
          labelFor="action"
          label=" "
          labelColor="black"
        />
        <span>
          Ao marcar esta caixa, certifico que tenho pelo menos 18 anos, tenho
          capacidade para celebrar contratos juridicamente vinculativos e li e
          concordo com os
        </span>
      </S.Terms>

      <InfluenciLink>
        Você é um influenciador?
        <Link href="/sign-in">
          <a> Inscrever-se</a>
        </Link>
      </InfluenciLink>
    </FormWrapperContent>
  )
}

export default FormSignUp
