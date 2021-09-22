import styled, { css } from 'styled-components'

export const Terms = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-bottom: ${theme.spacings.small};

    span {
      font-size: ${theme.font.sizes.small};
      margin-left: ${theme.spacings.small};
    }
  `}
`
