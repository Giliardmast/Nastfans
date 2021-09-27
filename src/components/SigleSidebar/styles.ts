import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    border-radius: ${theme.border.radius};
    background-color: #f7f7fa;
    border: 1px solid #e8f0f2;
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.xsmall};
    border-radius: 8px;
  `}
`
export const SidebarContent = styled.main`
  ${({ theme }) => css`
    p {
      font-size: 1.3rem;
      line-height: 2.4rem;
      margin-top: ${theme.spacings.xsmall};
      ${media.greaterThan('small')`
      line-height: 2.1rem;
      font-size: 1rem;
  `}
    }
    h3 {
      font-size: 1.77rem;
      color: ${theme.colors.black};
      margin-top: 4rem;

      &.asedr {
        margin-top: 0;
      }
    }
    ul {
      margin: 1.2rem 0 0 0;
      padding: 0;
    }

    li {
      list-style-type: none;
      margin-top: 0.5em;
      font-size: ${theme.font.sizes.small};
      ${media.greaterThan('small')`
      font-size: ${theme.font.sizes.xsmall};
  `}
    }
  `}
`
export const Item = styled.div``
export const Box = styled.div`
  ${({ theme }) => css`
    li {
      display: flex;
      margin: ${theme.spacings.xsmall} 0;
    }

    div {
      margin-bottom: -0.7rem;
      display: flex;
    }

    span {
      width: 100%;
      border-bottom: 1px dashed #ccc;
      margin: -1rem 0.9rem 0 0.9rem;
    }
  `}
`

export const Itemres = styled.div`
  white-space: nowrap;
  &.cache::before {
    content: 'R$';
    margin-right: 0.5rem;
  }
  &.left::after {
    content: 'R$';
    margin-right: 0.5rem;
  }
`
