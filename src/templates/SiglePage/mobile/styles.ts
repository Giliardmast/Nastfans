import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as AvatarStyle from 'components/UserAvatar/styles'

type CoverProps = {
  src: string
}

export const Cover = styled.div<CoverProps>`
  ${({ src }) => css`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 21.5rem;
    background-image: url(${src});
    background-size: cover;
    background-position: top center;
    opacity: 0.8;

    :before {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: '';
      z-index: 1;
      position: absolute;
      background-color: rgba(36, 18, 57, 0.4);
    }
  `}
`
export const UserContent = styled.div`
  ${AvatarStyle.Avatar} {
    width: 9.6rem;
    height: 9.6rem;
  }
`
export const SingleContent = styled.section`
  display: grid;
  grid-template-columns: 5fr 1.5fr;

  ${media.lessThan('medium')`
  grid-template-columns: 1fr;
  `}
`
export const Content = styled.div`
  position: relative;
`
export const SigleTitle = styled.h1`
  padding: 2rem 0rem;
`
export const Menu = styled.div`
  svg {
    width: 2rem;
    height: 4rem;
    color: black;
  }
`

export const MuiTabsbox = styled.div`
  position: relative;
  display: flex;
  margin: 1.5rem 1rem 1rem;
`
export const MuiTabs = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    gap: 1.2rem;

    span {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.black};
      font-weight: 500;
    }
  `}
`

export const VideoFeed = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  gap: 0.9rem;
  margin: 1.8rem 1rem;
`
export const SidbarConteiner = styled.div`
  margin-left: 2rem;
`
export const Sidbar = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
  `}
`

export const Video = styled.div``
