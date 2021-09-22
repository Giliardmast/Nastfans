import styled, { css } from 'styled-components'

export const Wrapper = styled.main``
export const Content = styled.div``
export const Heading = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} 0;
  `}
`
