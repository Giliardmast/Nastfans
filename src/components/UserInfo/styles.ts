import styled from 'styled-components'
import * as UserAvatar from 'components/UserAvatar/styles'

export const Content = styled.section`
  display: grid;
  grid-template-columns: 4fr 1fr;
  position: relative;
  overflow: hidden;
  padding: 0 2rem;
  height: 16rem;

  ${UserAvatar.UserName} {
    margin-top: 0;
    margin-left: 1.5rem;
  }
`
export const UserInfo = styled.div`
  position: relative;
`
export const UserSocial = styled.div`
  position: absolute;
  right: 0;
  bottom: 9.5rem;
`
export const ActionContainer = styled.div`
  display: flex;
  left: 16rem;
  position: absolute;
  justify-content: space-between;
  top: 9rem;
  gap: 3.3rem;
`
export const ActionContent = styled.div`
  display: flex;

  &.metrics {
    display: flex;
    gap: 2rem;
    padding-top: 0.7rem;
  }
`
export const Action = styled.div`
  height: 4rem;
  display: flex;
`
