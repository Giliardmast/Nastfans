import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
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

    @keyframes placeholderRotation {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(180deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`
export const ContentUserCicle = styled.div`
  width: 8rem;
  margin-top: 1rem;
  margin-left: 0.7rem;
  margin-right: 0.7rem;
  margin-bottom: 3.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;

  a {
    text-decoration: none;
  }

  ${media.lessThan('medium')`
  width: 5.5rem;
  `}
`
export const UserCicle = styled.div``
export const UserCicleBox = styled.div`
  padding: 0.1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  display: flex;
  position: relative;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`
export const UserCicleNome = styled.div`
  ${({ theme }) => css`
    max-width: 14ch;
    color: #323232;
    width: 100%;
    overflow: hidden;
    font-size: ${theme.font.sizes.xsmall};
    margin-top: 1.2rem;
    text-align: center;
    transition: 0.4s;
    font-weight: 600;
    line-height: 1.1;
    white-space: nowrap;
    text-overflow: ellipsis;

    ${media.lessThan('medium')`
   font-size: ${theme.font.sizes.xsmall};
   max-width: 10ch;
    `}
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
export const ImgUserCicle = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    width: 6.4rem;
    height: 6.4rem;
    display: flex;
    overflow: hidden;
    position: relative;
    font-size: 1.4285714285714286rem;
    align-items: center;
    flex-shrink: 0;
    line-height: 1;
    user-select: none;
    border-radius: ${theme.border.round};
    justify-content: center;

    ${media.lessThan('medium')`
    width: 4.4rem;
    height: 4.4rem;
    `}
    img {
      color: transparent;
      width: 100%;
      height: 100%;
      object-fit: cover;
      text-align: center;
      text-indent: 10000px;
    }
  `}
`
