import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 6fr 1fr;
  ${media.lessThan('medium')`
  grid-template-columns: 4fr 2fr;
  `}
`
export const Content = styled.ul`
  display: flex;
  text-align: left;
  text-overflow: ellipsis;
  list-style-type: none;
  margin: 0;
  padding: 0;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`
export const Bairros = styled.li`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xxsmall};
    vertical-align: baseline;
    outline: 0;

    a {
      font-size: ${theme.font.sizes.medium};
      text-decoration: none;
    }
  `}
`

export const Sidebar = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xxsmall};
    cursor: pointer;
  `}
`
