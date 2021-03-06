import styled, { css } from 'styled-components'
import * as ButaaomStyle from 'components/Button/styles'
import { darken } from 'polished'

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
      font-size: 1.87rem;
      font-weight: ${theme.font.bold};
      text-align: center;
    }

    p {
      padding-top: ${theme.spacings.xxsmall};
      font-weight: ${theme.font.light};
      font-size: ${theme.font.sizes.small};
    }

    ${ButaaomStyle.Wrapper} {
      background-color: #ff8845;
      color: ${theme.colors.white};
      :hover {
        background-color: ${darken(0.1, '#ff8845')};
      }
    }
  `}
`
export const ContentPreco = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const box = styled.div``
export const Preco = styled.div`
  ${({ theme }) => css`
    font-size: 2.4rem;
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
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`
