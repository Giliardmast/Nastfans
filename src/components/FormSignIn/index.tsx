import Link from 'next/link'

import { Twitter as TwitterIcon } from '@styled-icons/boxicons-logos/Twitter'
import { Google as GoogleIcon } from '@styled-icons/boxicons-logos/Google'
import { Apple as AppleIcon } from '@styled-icons/boxicons-logos/Apple'

import { Email } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'
import Heading from 'components/Heading'
import {
  ContentOpenForm,
  FormWrapperContent,
  FormLink,
  InfluenciLink,
  LoginSocial
} from 'components/Form'

const FormSignUp = () => {
  return (
    <FormWrapperContent>
      <LoginSocial>
        <Button size="medium" minimal icon={<TwitterIcon />} />
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
          placeholder="Digite o Email cadastrado"
          icon={<Email />}
        />
        <FormLink>
          Não tem uma conta?
          <Link href="/sign-up">
            <a> Inscrever-se</a>
          </Link>
        </FormLink>
        <Button size="large" fullWidth>
          Sign in now
        </Button>
      </form>

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
