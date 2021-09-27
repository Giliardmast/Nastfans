import styled, { css } from 'styled-components'
import * as UserAvatar from 'components/UserAvatar/styles'

export const Content = styled.section`
  ${UserAvatar.Wrapper} {
    button {
      margin-top: 2.5rem;
    }
  }
`
export const UserInfo = styled.div`
  margin-top: 9rem;
  position: relative;
`
export const UserSocial = styled.div``
export const ActionContainer = styled.div`
  position: absolute;
  right: 0;
  top: 8.5rem;
`
export const TopbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  color: #eeeeee;
  position: relative;
`

export const Action = styled.div`
  ${({ theme }) => css`
    span {
      font-size: ${theme.font.sizes.small};
    }
  `}
`
