import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
  `}
`
export const IconWrapper = styled.div`
  ${({ theme }) => css`
    a {
      color: ${theme.colors.white};
    }
  `}
`
export const Icon = styled.span`
  ${({ theme }) => css`
    background-color: ${darken(0.1, theme.colors.white)};
    padding: ${theme.spacings.xxsmall};
    margin-right: 0.8rem;
    display: flex;
    gap: 1rem;
    opacity: 0.6;
    border-radius: 5px;
    svg {
    }
    .twitter {
      svg {
        color: #439cd6;
      }
    }
    .youtube {
      svg {
        color: #ff0000;
      }
    }
    .instagram {
      svg {
        color: #37a0f2;
      }
    }
    .telegram {
      svg {
        color: #37a0f2;
      }
    }
    .tiktok {
      svg {
        color: #37a0f2;
      }
    }
    .linkAtenativo {
      svg {
        color: #37a0f2;
      }
    }

    margin-right: ${theme.spacings.xxsmall};
  `}
`
