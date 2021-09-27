import styled, { css, DefaultTheme } from 'styled-components'
import { RadioProps } from '.'
type RadioButton = { button?: boolean }
export const Wrapper = styled.div<RadioButton>`
  ${({ theme, button }) => css`
    ${button && wrapperModifiers.button(theme)}
  `}
`
const wrapperModifiers = {
  button: (theme: DefaultTheme) => css`
    input[type='radio'] {
      display: none;
    }
    input[type='radio'] + label {
      border-radius: 3rem;
      background: #f1f0f2;
      color: ${theme.colors.primary};
      padding: 5px 15px;
      font-size: 14px;
    }
    input[type='radio']:checked + label {
      background: ${theme.colors.primary};
      color: #fff;
    }
  `
}
export const Input = styled.input`
  ${({ theme }) => css``}
`

export const Label = styled.label<Pick<RadioProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    padding-left: ${theme.spacings.xxsmall};
    color: ${theme.colors[labelColor!]};
    line-height: 1;
    cursor: pointer;
  `}
`
