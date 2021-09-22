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
    background-color: ${theme.colors.primary};
    z-index: ${theme.layers.menu};
  `}
`
