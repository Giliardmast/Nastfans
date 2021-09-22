import styled, { css, DefaultTheme } from 'styled-components'
import * as ButtonStyles from 'components/Button/styles'
import { UserAvatarProps } from '.'
import { darken } from 'polished'
type WrapperProps = Pick<UserAvatarProps, 'size' | 'usergp' | 'bg' | 'color'>

const wrapperModifiers = {
  bg: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
  `,

  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,
  black: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
  `,
  usergp: (theme: DefaultTheme) => css`
    align-items: start;
    ${UserName} {
      font-size: ${theme.font.sizes.xxlarge};
      margin-left: 0.5rem;
      > span {
        display: block;
        font-size: ${theme.font.sizes.large};
      }
    }
  `,
  small: (theme: DefaultTheme) => css`
    ${UserName} {
      font-size: ${theme.font.sizes.large};
      margin-left: ${theme.spacings.xxsmall};
      > span {
        display: block;
        font-size: ${theme.font.sizes.small};

        > h3 {
          font-size: ${theme.font.sizes.medium};
        }
      }
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
    align-items: start;
    ${Avatar} {
      width: 7rem;
      height: 7rem;
    }
    ${UserName} {
      margin-left: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.xxlarge};
      > span {
        display: block;
        font-size: ${theme.font.sizes.large};
      }
    }
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
    align-items: start;
    ${Avatar} {
      width: 11.6rem;
      height: 11.6rem;
    }
    ${UserName} {
      margin-top: ${theme.spacings.xsmall};
      margin-left: ${theme.spacings.medium};
      font-size: ${theme.font.sizes.xxlarge};
      > span {
        display: block;
        font-size: ${theme.font.sizes.large};
      }
    }
    ${UserSeguir} {
      display: none;
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, size, usergp, bg, color }) => css`
    display: flex;
    align-items: center;
    flex-grow: 1;
    gap: calc(${theme.grid.gutter} / 3);
    padding: 0.5rem ${theme.spacings.xsmall};

    a {
      text-decoration: none;
    }

    .Cicle {
      z-index: 2;
      border-radius: ${theme.border.round};
      background-color: #ffffff;
    }
    .CicleColor {
      z-index: 1;
      background: linear-gradient(135deg, #ffa000 0%, #8035c4 100%);
      transition: 0.4s;
      border-radius: 50%;
      animation: placeholderRotation 1.5s infinite ease-in-out;
    }

    ${!!usergp && wrapperModifiers.usergp(theme)}
    ${!!size && wrapperModifiers[size](theme)}
    ${!!bg && wrapperModifiers.bg(theme)}
    ${!!color && wrapperModifiers[color](theme)}
  `}
`

export const Avatar = styled.div`
  ${({ theme }) => css`
    width: 4rem;
    height: 4rem;
    z-index: 2;
    .img__avatar {
      object-fit: cover;
      text-align: center;
      text-indent: 10000px;
      background-size: cover;
      background-position: center center;
      width: 100%;
      height: 100%;
      border-radius: ${theme.border.round};

      &::after {
        content: '';
        background-color: aqua;
      }
    }
  `}
`
export const BoxOne = styled.div`
  top: -0.3rem;
  left: -0.3rem;
  right: -0.3rem;
  bottom: -0.3rem;
  position: absolute;
`
export const Boxtwo = styled.div`
  top: -0.6rem;
  left: -0.6rem;
  right: -0.6rem;
  bottom: -0.6rem;
  position: absolute;
`
export const UserName = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    max-width: 14ch;
    white-space: nowrap;
    text-overflow: ellipsis;
    align-items: center;

    > span {
      display: block;
      font-weight: ${theme.font.light};
    }
  `}
`
export const UserSeguir = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xsmall};
    ${ButtonStyles.Wrapper} {
      padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
      color: ${theme.colors.black};
      background: ${theme.colors.white};
      border-radius: ${theme.border.xradius};

      &:hover {
        background: ${darken(0.1, theme.colors.white)};
      }
    }
  `}
`
export const UserCicleBox = styled.div`
  display: flex;
  position: relative;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`

export const Age = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
  `}
`
