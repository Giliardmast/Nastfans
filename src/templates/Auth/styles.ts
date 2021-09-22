import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'
import * as LogoStyles from 'components/Logo/styles'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: grid;

  height: 100vh;
  ${media.greaterThan('medium')`
  grid-template-columns: 1fr 1fr;
      `}
`
export const BannerContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    height: 100%;
    color: ${theme.colors.white};
    position: relative;
    z-index: ${theme.layers.base};

    // a largura do link vai se encaxa no tamanho do conteudo
    a {
      width: fit-content;
      height: fit-content;
    }
  `}
`

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-image: url(/img/sign-in.png);
    background-size: cover;
    background-position: top center;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    ${media.lessThan('medium')`
      display: none;
    `}
    //overley
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${theme.colors.black};
      opacity: 0.82;
    }
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.xxsmall};

    strong {
      color: ${theme.colors.primary};
    }
  `}
`

export const Footer = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    align-self: end;
    text-align: center;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: grid;
    align-items: center;
    justify-content: center;
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${media.greaterThan('medium')`
      width: 36rem;
    `}

    ${LogoStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`
