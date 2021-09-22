import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type CoverProps = {
  src: string
}

export const Cover = styled.div<CoverProps>`
  ${({ src }) => css`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 39.5rem;
    background-image: url(${src});
    background-size: cover;
    background-position: top center;
    opacity: 0.8;

    ${media.greaterThan('medium')`
    height:40rem;
    `}
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
  margin-top: 26.5rem;
`
export const SingleContent = styled.section`
  display: grid;
  grid-template-columns: 5fr 1.5fr;
`
export const Content = styled.div``
export const SigleTitle = styled.h1`
  padding: 2rem 0rem;
`
export const MuiTabsbox = styled.div`
  margin: 0 2.5rem;
  display: flex;
  justify-content: space-between;
  height: 7rem;
  box-shadow: 0 1px 4px rgb(50 50 50 / 7%);
`
export const MuiTabs = styled.div`
  display: flex;
  justify-content: end;
  gap: 1.5rem;
  padding: 2rem 0rem;
  flex-wrap: wrap;
`

export const ContentCard = styled.div`
  margin: 3rem 2.5rem;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  position: relative;
  gap: 1.2rem;
`
export const SidbarConteiner = styled.div`
  margin-left: 2rem;
`
export const Sidbar = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
  `}
`
