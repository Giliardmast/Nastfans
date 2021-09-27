import styled, { css } from 'styled-components'

export const Sidebar = styled.div`
  position: absolute;
  bottom: 4rem;
  right: 0.7rem;
`
export const Item_sidebar_icons = styled.div`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall} 0;
    cursor: pointer;
    svg {
      width: 3.2rem;
    }

    > span {
      display: block;
      text-align: center;
      font-size: ${theme.font.sizes.xsmall};
      margin-top: 0.5rem;
    }
  `}
`

export const Item_footer = styled.div`
  padding-bottom: 1.8rem;
  position: absolute;
  bottom: 0.6rem;
  width: 100%;
`
