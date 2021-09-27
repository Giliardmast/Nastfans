import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`
export const Content = styled.div`
  flex: 1 0 auto;
`

export const sectionBg = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    z-index: ${theme.layers.menu};

    &.mobile_menu {
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  `}
`
