import styled, { css } from 'styled-components'
import { darken } from 'polished'

import * as TextFieldStyles from 'components/TextField/styles'
import * as ButtonStyles from 'components/Button/styles'
import * as ChekStyles from 'components/Checkbox/styles'

export const ContentOpenForm = styled.div`
  display: flex;
  position: relative;
`

export const LoginSocial = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`
export const FormWrapperContent = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }
    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.xsmall} auto ${theme.spacings.small};
      padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
      border-width: medium;
      border-style: solid;
      border-color: ${theme.colors.lightGray};
      border-radius: ${theme.border.radius};
      svg {
        width: 3.5rem;

        & + span {
          margin-left: ${theme.spacings.xxsmall};
        }
      }
    }
    ${ChekStyles.Wrapper} {
      align-items: start;
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`

export const FormLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.small};
    color: ${theme.colors.black};
    text-align: right;
    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      border-bottom: 0.1rem solid ${theme.colors.secondary};
      transition: color, border, ${theme.transition.fast};
      &:hover {
        color: ${darken(0.1, theme.colors.secondary)};
        border-bottom: 0.1rem solid ${darken(0.1, theme.colors.secondary)};
      }
    }
  `}
`
export const InfluenciLink = styled.div`
  ${({ theme }) => css`
    text-align: center;

    a {
      color: ${theme.colors.primary};
      text-decoration: none;
    }
  `}
`
