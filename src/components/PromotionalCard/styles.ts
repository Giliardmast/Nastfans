import styled, { css } from 'styled-components'
import * as ButaaomStyle from 'components/Button/styles'
import { darken } from 'polished'
import media from 'styled-media-query'

export const ContentPromotion = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    margin-top: -6.1rem;
    border-radius: ${theme.border.radius};
    background-color: #e8e8ff96;
    border: 1px solid #e8f0f2;
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.xsmall};

    h2 {
      font-size: 1.65rem;
      font-weight: ${theme.font.bold};
    }

    p {
      padding-top: ${theme.spacings.xxsmall};
      font-weight: ${theme.font.light};
      font-size: ${theme.font.sizes.xsmall};
    }

    ${ButaaomStyle.Wrapper} {
      background-color: #ff8845;
      color: ${theme.colors.white};
      :hover {
        background-color: ${darken(0.1, '#ff8845')};
      }
    }
    ${media.greaterThan('small')`
    margin-top: 0rem;
  `}
  `}
`
export const ContentPreco = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;
`
export const box = styled.div`
  width: 100%;
  text-align: center;
`
export const Preco = styled.div`
  ${({ theme }) => css`
    font-size: 3.6rem;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.bold};

    span {
      font-size: ${theme.font.sizes.small};
    }
  `}
`
export const ContentInfo = styled.div`
  ${({ theme }) => css`
    h3 {
      font-size: ${theme.font.sizes.small};
      padding-bottom: ${theme.spacings.xxsmall};
      border-bottom: 1px solid ${theme.colors.gray};
      color: ${theme.colors.darkGray};
    }
    ul {
      margin: 1.2rem 0 0 0;
      padding: 0;
    }

    li {
      list-style-type: none;
      margin-top: 0.5em;
      font-size: 1.3rem;
      color: ${theme.colors.black}
    }
  `}
`
