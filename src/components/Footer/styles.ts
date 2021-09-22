import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} 2rem;

    ${media.lessThan('medium')`
    padding: ${theme.spacings.xsmall} 0rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};
  `}
`
export const Social = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
  `}
`
export const Column = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};
    a,
    span {
      display: block;
      color: ${theme.colors.white};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }
    a:hover {
      text-decoration: underline;
    }
    ${media.lessThan('medium')`
    grid-template-columns: repeat(1, 1fr);
    `}
  `}
`
export const SubColumn = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.grid.gutter};
    // margin-top: ${theme.spacings.medium};
  `}
`
export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
    text-align: center;
  `}
`
export const Notification = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.medium};

    ${media.lessThan('medium')`

    p { text-align: center;
      margin-bottom: ${theme.spacings.xsmall};
    }

    `}
  `}
`
